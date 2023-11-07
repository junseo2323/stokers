import './Buying.scss';
const template =()=>{
    return (<div className="template">
        <div className="Mainframe">
            <div className="MainTitle">주식 1주 구매하기</div>
            <div className="SubTitle">주식을 시작하면서,</div>
            <div className="SubTitle">1주를 구매해봅시다.</div>
        <div className="Content">
            <div className="ExplainBotton">
                <div className="Explain">주식을 구매한 후, 매도 완료 사진을</div>
                <div className="Explain">아래에 업로드 해주세요!</div>
            </div>
            <div className="UploadBox">
                <div className="UploadIcon"></div>
            </div>
            <div className="YesBotton">
                <div className="Yes">확인</div>
            </div>

        </div>
        </div>
    </div>);
};
export default template;