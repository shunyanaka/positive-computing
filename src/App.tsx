import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Container = styled.div`
  text-align: center;
  background-color: #f8f8f8; // ライトグレイの背景色
  min-height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3em; // タイトルのフォントサイズを大きく
  color: #333; // ダークグレイの色
  margin: 40px 0;
`;

const Subheading = styled.h2`
  color: #333; // ここで色をダークグレイに設定
  margin: 100px 0 10px; // 上下のマージンを適宜調整
  font-size: 2em; // 小見出しのフォントサイズ
`;

const Description = styled.p`
  color: #666; // ミディアムグレイの色
  margin: 20px 0;
  font-size: 1.2em;
`;

const VideoWrapper = styled.div`
  margin: 40px 0;
`;

const Video = styled.video`
  width: 90%;
  max-width: 800px; // ビデオの最大幅を大きく
  margin-top: 20px;
  border-radius: 10px; // ビデオの角を丸く
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); // ビデオに影を付ける
`;

const ContactSection = styled.section`
  margin-top: 300px;
`;

const ContactHeading = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const ContactInfo = styled.p`
  color: #666;
  margin-bottom: 300px;
  font-size: 1.2em;
  a {
    color: #0066cc;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const StyledLink = styled.a`
  color: #1a0dab; // リンクの色
  text-decoration: none; // 下線を消す

  &:hover {
    text-decoration: underline; // ホバー時に下線を表示
  }
`;

function App() {
  return (
    <Container>
      <Title>Positive Computing</Title>
      
      <Subheading>Positive Computingとは？</Subheading>
      <Description>
      <StyledLink href="https://www.jstage.jst.go.jp/article/kansei/18/2/18_63/_pdf/-char/ja" target="_blank" rel="noopener noreferrer">
        Positive Computing
      </StyledLink>
        とは、人をポジティブにする情報処理技術のことです。
      </Description>
      <Description>
        例えば、ネガティブな言葉をポジティブな言葉に書き換えるシステムや、感謝の可視化アプリなどがあります。
      </Description>

    
      <Subheading>画像と音を利用したPositive Computing</Subheading>
      <Description>
        画像と音には明快性や活動性といった、素材の印象を表す因子があります。
      </Description>
      <Description>
        それらの因子が低い素材から高い素材、つまり不快な印象の素材から快な印象の素材を順に視聴することで、<br />
        その人自身の気持ちも不快から快に誘導できることを
        <StyledLink href="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202302286743234891" target="_blank" rel="noopener noreferrer">
        「画像と音を利用したポジティブ・コンピューティング」
        </StyledLink>
        という論文で示しました。
      </Description>
      <Description>
        では、実際にその論文で使用した素材を視聴してみましょう。
      </Description>

      {/* 各VideoWrapperを繰り返す代わりに、この部分をコンポーネント化してpropsでビデオソースを渡すことができます */}
      <Subheading>素材１</Subheading>
      <Element name="mainVideo">
        <VideoWrapper>
          <Video controls>
            <source src="videos/ABC.mp4" type="video/mp4" />
            あなたのブラウザはビデオタグをサポートしていません。
          </Video>
        </VideoWrapper>
      </Element>

      <Subheading>素材２</Subheading>
      <Element name="mainVideo">
        <VideoWrapper>
          <Video controls>
            <source src="videos/DEF.mp4" type="video/mp4" />
            あなたのブラウザはビデオタグをサポートしていません。
          </Video>
        </VideoWrapper>
      </Element>

      <Subheading>素材３</Subheading>
      <Element name="mainVideo">
        <VideoWrapper>
          <Video controls>
            <source src="videos/GHI.mp4" type="video/mp4" />
            あなたのブラウザはビデオタグをサポートしていません。
          </Video>
        </VideoWrapper>
      </Element>

      <Subheading>素材４</Subheading>
      <Element name="mainVideo">
        <VideoWrapper>
          <Video controls>
            <source src="videos/JKL.mp4" type="video/mp4" />
            あなたのブラウザはビデオタグをサポートしていません。
          </Video>
        </VideoWrapper>
      </Element>
      
      <Description>
        いかがでしたか？気分はポジティブになったでしょうか。
      </Description>
      <Description>
        現在のあなたの気分がネガティブなほど、効果があったのではないかと思います。
      </Description>

      <Subheading>最後に</Subheading>
      <Description>
        Positive Computingに決まった手法はありません。<br />
        人をポジティブにできれば、それはもうPositive Computingなのです。
      </Description>
      <Description>
        あなたが少しでもPositive Computingに興味を持っていただけたら幸いです。
      </Description>
      <Description>
        世界を少しでも楽しく、ポジティブなものにできるよう、Positive Computingのさらなる発展を願っています。
      </Description>

      <ContactSection>
        <ContactHeading>お問い合わせ</ContactHeading>
        <ContactInfo>
          ご質問やコメントがありましたら、お気軽に下記のメールアドレスまでご連絡ください：<br />
          <a href="mailto:contact@example.com">shunyanakamuraschool@gmail.com</a>
        </ContactInfo>
      </ContactSection>

    </Container>
  );
  
}

export default App;
