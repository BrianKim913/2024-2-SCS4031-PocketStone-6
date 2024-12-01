from fastapi import FastAPI, Depends 
from sqlalchemy.orm import Session
from database import get_db
import random
import logging

from schemas import Member, RecommendationRequestDto, RecommendationResponseDto
from models import Employee, Company, Project

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()




@app.get("/")
def read_root():
    return {"message": "Hello, Wosdsdsdsdsrld!"}

@app.get("/employees")
def read_employees(db: Session = Depends(get_db)):
    employees = db.query(Employee).all()
    return employees




@app.post("/api/recommendation")
def recommendation(body: RecommendationRequestDto, db: Session = Depends(get_db)):
    project_id = body.projectId
    memberIds = body.memberIds
    print("추천 API 시작")

    logger.info("================== FUNCTION START ==================")
    logger.info(f"Raw body: {body}")
    logger.info(f"Project ID: {body.projectId}")
    logger.info(f"Member IDs: {body.memberIds}")

    # 프로젝트 ID로 해당 프로젝트 조회
    project = db.query(Project).filter(Project.id == project_id).first()

    if not project:
        return {"error": "해당 프로젝트를 찾을 수 없습니다."}

    # 프로젝트의 유저 ID를 통해 회사 조회
    company_id = project.company_id
    company = db.query(Company).filter(Company.id == company_id).first()

    if not company:
        return {"error": "해당 프로젝트와 연결된 회사를 찾을 수 없습니다."}

    # 해당 회사에 속한 직원들 조회
    company_id = company.id
    
    # 요청된 멤버들이 해당 회사에 속해 있는지 확인
    valid_members = db.query(Employee).filter(
        Employee.company_id == company_id,
        Employee.employee_id.in_(memberIds)
    ).all()

    # 만약 유효하지 않은 멤버가 있다면 오류 반환
    if len(valid_members) != len(memberIds):
        return {"error": "요청된 멤버 중 일부가 해당 회사에 속하지 않습니다."}
   
    print("valid members")
    print(valid_members)

    # 필터링된 직원들 중 3명 무작위 선택 (조건에 맞는 직원이 3명 이상일 때)
    if len(valid_members) > 3:
        recommended_employees = random.sample(valid_members, 3)
    else:
        recommended_employees = valid_members 

    # 직원 ID만 리스트로 추출
    employee_ids = [employee.employee_id for employee in recommended_employees ]
    
    recommended_members = [{"employeeId": id} for id in employee_ids]
    response = RecommendationResponseDto(memberList=recommended_members)
    
    return response

