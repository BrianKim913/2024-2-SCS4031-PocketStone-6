package com.pocketstone.team_sync.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.pocketstone.team_sync.config.jwt.TokenAuthenticationFilter;
import com.pocketstone.team_sync.config.jwt.TokenProvider;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Configuration
public class WebSecurityConfig {

    
    private final TokenProvider tokenProvider;
    
    //정적인 자원에 대한 보안 제외
    @Bean
    public WebSecurityCustomizer configure() {
        return (web) -> web.ignoring()
                .requestMatchers("/static/**");
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(CsrfConfigurer::disable)
        .httpBasic(basic -> basic.disable())//베이직 로그인 사용 안함
        .formLogin(AbstractHttpConfigurer::disable);//폼로그인 사용안함

        http.sessionManagement(session -> session //세션을 사용하지 않음
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);//jwt필터추가


        http.authorizeHttpRequests((authz) -> authz
                .requestMatchers("/api/users/me","api/users/withdraw").authenticated()
                .requestMatchers("/api/users/**","/api/auth/**").permitAll() //로그인, 회원가입, 토큰 재발급만 접근허용
                .requestMatchers("/api/**").authenticated() //api로 시작하는 모든 경로 인증필요
                .anyRequest().permitAll());

        http.cors(cors -> cors.configurationSource(apiConfigurationSource()));
        return http.build();
    }

    UrlBasedCorsConfigurationSource apiConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE","PATCH", "OPTIONS"));
        configuration.addAllowedHeader("*");
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public TokenAuthenticationFilter tokenAuthenticationFilter() {
        return new TokenAuthenticationFilter(tokenProvider);
    }
    
    
}
