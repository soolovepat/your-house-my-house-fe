import React from "react";
import { Link } from "react-router-dom";
import { StFooterWrap, StLinkCSCenter, StLinkCSNumber, StLinkCSTime, StCSButton  } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return (
        <StFooterWrap>
            <div>
                <nav>
                    <div>
                    <StLinkCSCenter><Link to="/">고객센터</Link><FontAwesomeIcon icon={faChevronRight} size="2xs"/></StLinkCSCenter>
                    </div>
                    <div>
                    <Link to="/"><StLinkCSNumber>1670-0876</StLinkCSNumber></Link>
                    <StLinkCSTime>09:00~18:00</StLinkCSTime>
                    </div>
                    <div>
                        평일, 전체 문의 상담 가능
                        <br />
                        주말, 공휴일: 오늘의집 직접배송, 
                        <br />
                        이사/시공/수리 문의 상담 가능
                    </div>
                    <div>
                    <StCSButton><Link to="/">카톡 상담(평일 09:00~18:00)</Link></StCSButton>
                    </div>
                    <div>
                    <StCSButton><Link to="/">이메일 문의</Link></StCSButton>
                    </div>
                </nav>
                <nav>
                    <Link to="/">회사소개</Link>
                    <Link to="/">채용정보</Link>
                    <Link to="/">이용약관</Link>
                    <Link to="/"> <b>개인정보 처리방침</b> </Link>
                    <Link to="/">공지사항</Link>
                    <Link to="/">안전거래센터</Link>
                    <Link to="/">입점신청</Link>
                    <Link to="/">제휴/광고 문의</Link>
                    <Link to="/">사업자 구매 회원</Link>
                    
                    <Link to="/">시공파트너 안내</Link>
                    <Link to="/">상품광고 소개</Link>
                    <Link to="/">고객의 소리</Link>
                </nav>
                <nav>
                    <div>㈜버킷플레이스 | 대표이사 이승재<br />
                    <address> 서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층 </address>
                    
                        <Link to="/">contact@bucketplace.net</Link> | 사업자등록번호 119-86-91245{" "}
                        <Link to="/">사업자정보확인</Link><br />
                    
                    통신판매업신고번호 제218-서울서초-0580호</div>
                    <div style={{fontSize: "10px", lineHeight: "14px"}}>
                    (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단, (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.<br/><br/>
                    <address> Copyright 2014. bucketplace, Co., Ltd. All rights reserved.</address>
                    </div>
                </nav>
            </div>
        </StFooterWrap>
    );
};

export default Footer;
