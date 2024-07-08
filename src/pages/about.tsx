import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>О нас</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">О нас</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h2>
                  UNIMAG - отличный способ поднять свой сайт в поиске!
                </h2>
                <p>
                  Вот посмотрите: ИКС нашего сайта составляет <strong>11000</strong> - это превосходный показатель для сайта.
                  А уж ссылки с него на сторонние ресурсы придают существенный вес сайту, на который ведет ссылка с нашего блога.
                </p>
                <p>
                  ИКС (индекс качества сайта) – показатель авторитетности и востребованности сайта аудиторией.
                  ИКС  запущен Яндексом 31 августа 2018 года и стал заменой старому показателю тИЦ.
                </p>
                <h2>Что такое ИКС и почему он важен для поисковой выдачи?</h2>
                <p>
                  Расшифровывается аббревиатура ИКС просто — «Индекс качества сайта».
                  Его ввёл самый популярный российский поисковик Яндекс вместо ТИЦ, «Тематического индекса цитирования».
                  Если ТИЦ показывал число ссылок на портал с других тематических ресурсов, то ИКС стал более продвинутым показателем, индикатором качества сайта.
                  Как заявили в самом Яндексе, при расчёте нового индекса теперь учитываются не только размеры аудитории, но и степень её удовлетворённостью сайтом, уровень доверия к порталу. В ходе расчётов Яндекс пообещал применять самые разные инструменты, в том числе данные Дзена, Карт, Метрики и так далее. Будут анализироваться сведения о стоящем за сайтом бизнесе.
                  В итоге определяется ИКС в цифрах — 10, 50, 100, 1000… Чем выше показатель, тем выше качество портала.
                </p>
                <h2>Что нужно, чтобы получить ссылку с вашего блога?</h2>
                <p>
                  Все очень просто - закажите размещение статьи на бирже Kwork.ru.
                  Вы сможете заказать не только ссылку на ваш ресурс с ключевой фразой, но, и в качестве дополнительной опции, статью с уникальным текстом.
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
