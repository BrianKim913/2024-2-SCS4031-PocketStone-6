import { UseQueryResult } from '@tanstack/react-query';
import { deleteAllProjectMembers } from 'api/projects/deleteAllProjectMembers';
import EmployeeSpecModal from 'components/Modal/EmployeeSpecModal';
import { useMemberList } from 'hooks/useMemberList';
import { useProjectMemberQuery } from 'hooks/useProjectMemberQuery';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BS, CS, MS } from 'styles';
import { checkIsNoData } from 'utils/checkIsNoData';

export default function ProjectMember() {
  const { id } = useParams();
  const memberQuery = useProjectMemberQuery(Number(id));
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState(1);

  return (
    <div className={MS.container}>
      {showModal ? <EmployeeSpecModal id={currentId} setShowModal={setShowModal} /> : null}
      <div className={MS.content}>
        <div className={`${MS.contentTitle} ${MS.displayFlex}`}>
          <p>인원 수정</p>
          {checkIsNoData(memberQuery.data) ? null : (
            <button
              className={BS.YellowBtn}
              onClick={() => {
                deleteAllProjectMembers(Number(id), navigate);
              }}>
              전체 인원 삭제
            </button>
          )}
        </div>
        <div className={MS.contentBox}>
          <></>
          <p style={{ textAlign: 'center' }}>👇</p>
          <MemberContent
            memberQuery={memberQuery}
            setCurrentId={setCurrentId}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </div>
  );
}

const MemberContent = ({
  memberQuery,
  setCurrentId,
  setShowModal,
}: {
  memberQuery: UseQueryResult;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className={CS.contentTitle}>
        <div className={MS.displayFlex}>
          <div className={`${CS.category} ${MS.flexOne}`}>사원번호</div>
          <div className={`${CS.category} ${MS.flexOne}`}>관리번호</div>
          <div className={`${CS.category} ${MS.flexTwo}`}>이름</div>
          <div className={`${CS.category} ${MS.flexTwo}`}>부서</div>
          <div className={`${CS.category} ${MS.flexOne}`}>직책</div>
          <div className={`${CS.category} ${MS.flexOne}`}></div>
        </div>
      </div>
      <div className={CS.contentBox}>
        {checkIsNoData(memberQuery.data) ? (
          <NoMemberList />
        ) : (
          <MemberList setCurrentId={setCurrentId} setShowModal={setShowModal} />
        )}
      </div>
    </>
  );
};

const NoMemberList = () => {
  return (
    <div className={CS.notice}>
      <p>멤버 정보가 없어요.</p>
      <p>사원정보에서 멤버를 새로 등록해보세요!</p>
    </div>
  );
};

const MemberList = ({
  setCurrentId,
  setShowModal,
}: {
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { id } = useParams();
  const { memberInfoList } = useMemberList(Number(id));

  return (
    <>
      {memberInfoList.map(
        ({ employeeId, staffId, name, department, position }: employeeInfoType, i: number) => {
          return (
            <MemberBlock
              key={i}
              employeeId={employeeId}
              staffId={staffId}
              name={name}
              department={department}
              position={position}
              setCurrentId={setCurrentId}
              setShowModal={setShowModal}
            />
          );
        }
      )}
    </>
  );
};

interface MemberBlockProps {
  employeeId: number;
  staffId: string;
  name: string;
  department: string;
  position: string;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemberBlock = ({
  employeeId,
  staffId,
  name,
  department,
  position,
  setCurrentId,
  setShowModal,
}: MemberBlockProps) => {
  const navigate = useNavigate();

  return (
    <div className={CS.container}>
      <div className={CS.card}>
        <div
          className={CS.canClickPart}
          onClick={() => {
            navigate(`/employee/${employeeId}`);
          }}>
          <div className={`${CS.category} ${MS.flexOne}`}>{employeeId}</div>
          <div className={`${CS.category} ${MS.flexOne}`}>{staffId}</div>
          <div className={`${CS.category} ${MS.flexTwo}`}>{name}</div>
          <div className={`${CS.category} ${MS.flexTwo}`}>{department}</div>
          <div className={`${CS.category} ${MS.flexOne}`}>{position}</div>
        </div>
        <div className={CS.noClickPart}>
          <div className={`${CS.category} ${MS.flexOne}`}>
            <button
              className={BS.YellowBtn}
              onClick={async () => {
                setCurrentId(employeeId);
                setShowModal(true);
              }}>
              정보 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
