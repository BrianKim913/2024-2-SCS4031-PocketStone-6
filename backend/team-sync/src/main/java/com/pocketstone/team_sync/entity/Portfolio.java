package com.pocketstone.team_sync.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "past_project_id", updatable = false)
    private Long id;

    //해당 지원자
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "applicant_id", nullable = false)
    private Applicant applicant;

    //프로젝트 내용
    private String projectName;
    private String description;
   
}
