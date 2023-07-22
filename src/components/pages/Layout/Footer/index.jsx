import React from "react";
import { StFooterWrap } from "./styled";

export const Footer = () => {
    return (
        <StFooterWrap>
            <div>
                <nav>
                    <a href="#">고객센터</a>
                    <a href="#">1670-0876</a>
                    <span>09:00~18:00</span>
                    <p>
                        평일, 전체 문의 상담 가능
                        <br />
                        주말, 공휴일: 오늘의집 직접배송, 이사/시공/수리 문의 상담 가능
                    </p>
                    <a href="#">카톡 상담(평일 09:00~18:00)</a>
                    <a href="#">이메일 문의</a>
                </nav>
                <nav>
                    <a href="#">회사소개</a>
                    <a href="#">입점신청</a>
                    <a href="#">채용정보</a>
                    <a href="#">제휴/광고 문의</a>
                    <a href="#">이용약관</a>
                    <a href="#">사업자 구매 회원</a>
                    <a href="#">
                        <b>개인정보 처리방침</b>
                    </a>
                    <a href="#">시공파트너 안내</a>
                    <a href="#">공지사항</a>
                    <a href="#">상품광고 소개</a>
                    <a href="#">안전거래센터</a>
                    <a href="#">고객의 소리</a>
                </nav>
                <nav>
                    <p>㈜버킷플레이스 | 대표이사 이승재</p>
                    <address> 서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층 </address>
                    <p>
                        <a href="#">contact@bucketplace.net</a> | 사업자등록번호 119-86-91245{" "}
                        <a href="#">사업자정보확인</a>
                    </p>
                    <p>통신판매업신고번호 제218-서울서초-0580호</p>
                    <address> Copyright 2014. bucketplace, Co., Ltd. All rights reserved.</address>
                </nav>
            </div>
        </StFooterWrap>
    );
};

export default Footer;
