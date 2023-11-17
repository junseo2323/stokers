import "./Rank.scss"

import image_level1 from '../image/house.png'
import image_level2 from '../image/startup.png'
import image_level3 from '../image/low.png'
import image_level4 from '../image/middle.png'
import image_level5 from '../image/high.png'

const Rank = () => {
  return (
    <div className="Rank">
      <div className="Container1">
        <div className="Block1">
          <div className="Username">Hunsol03</div>
          <div className="Interest">관심분야 : 이차전지</div>
          <div className="Completed_quest">완료 퀘스트 : 7개</div>
          <div className="Ranking">#10위</div>
        </div>
        <div className="Block2">
          <div className="Wrapper">
            <img src={image_level1} className='Rank_img' />
          </div>
        </div>
      </div>
      <div className="Container2">
        <div className="Top">
          <div className="Left">순위</div>
          <div className="Center">유저</div>
          <div className="Right">진행도</div>
        </div>
        <div className="Bottom">
          <ul>
            <li>
              <div className="Left">1</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={image_level5} className="Img"></img>
                </div>
                <div className="Name">JaeBaek00</div>
              </div>
              <div className="Right">50단계</div>
            </li>
            <li>
              <div className="Left">2</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={image_level5} className="Img"></img>
                </div>
                <div className="Name">Changwoo83</div>
              </div>
              <div className="Right">49단계</div>
            </li>
            <li>
              <div className="Left">3</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={image_level5} className="Img"></img>
                </div>
                <div className="Name">Jihwan012</div>
              </div>
              <div className="Right">43단계</div>
            </li>
            <li>
              <div className="Left">4</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={image_level4} className="Img"></img>
                </div>
                <div className="Name">Jihyeon2</div>
              </div>
              <div className="Right">39단계</div>
            </li>
            <li>
              <div className="Left">5</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={image_level4} className="Img"></img>
                </div>
                <div className="Name">Junseop16</div>
              </div>
              <div className="Right">38단계</div>
            </li>
            <li>
              <div className="Left">6</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={image_level4} className="Img"></img>
                </div>
                <div className="Name">Seungjoon888</div>
              </div>
              <div className="Right">34단계</div>
            </li>
            <li>
              <div className="Left">7</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={image_level3} className="Img"></img>
                </div>
                <div className="Name">Jina01</div>
              </div>
              <div className="Right">28단계</div>
            </li>
            <li>
              <div className="Left">8</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={image_level3} className="Img"></img>
                </div>
                <div className="Name">Juhyeon38</div>
              </div>
              <div className="Right">21단계</div>
            </li>
            <li>
              <div className="Left">9</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={image_level2} className="Img"></img>
                </div>
                <div className="Name">Yumin2</div>
              </div>
              <div className="Right">19단계</div>
            </li>
            <li>
              <div className="Left">10</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={image_level1} className="Img"></img>
                </div>
                <div className="Name">Hunsol03</div>
              </div>
              <div className="Right">7단계</div>
            </li>

          </ul>
        </div>
      </div>
    </div >
  );
}

export default Rank