import { useState, useRef } from 'react';
import styled from 'styled-components';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import SoMe from '../components/SoMe';
import ButtonArrow from '../components/buttons/ButtonArrow';
import { ButtonRegular } from '../components/buttons/ButtonRegular';

import '../styles/form.scss';
import 'animate.css/animate.min.css';

import { executeScroll } from '../js/scroll';
import { buttonColor, whiteRegular } from '../constants/styles';
import {
  heroWallpaper,
  webDevWallpaper,
  generalProjectsWallpaper,
  artWalppaper,
  aboutWalppaper,
  profilePicture
} from '../js/images';

const HeroSectionStyle = styled.section`
  /* ====== SECTION SETTINGS ====== */
    /* ~  (Section Syle)  ~ */
      --section-bg-s1-margin: 0 auto;
      --section-bg-s1-min_height: 100vh;
      --section-bg-s1-max_height: 100%;
      --section-bg-s1-padding: 20px;
      --section-bg-s1-bg_color: rgba(0,0,0, 0.6);
      --section-bg-s1-bg_image: url(${heroWallpaper});
      --section-bg-s1-bg_attachment: fixed;
      --section-bg-s1-bg_position: center;
      --section-bg-s1-bg_repeat: no-repeat;
      --section-bg-s1-bg_blend_mode: darken;
      --section-bg-s1-bg_size: cover;
      --section-bg-s1-box_shadow: none;
      overflow: hidden;
    /* ----------~(end)~---------- */
    
    /* ~  (Section Title)  ~ */
      h1 {
        --section-text-margin: 0 auto;
        --section-text-padding: 0px;
        --section-text-display: block;
        --section-text-color: #fff;
        --section-font_family: 'Satoshi', sans-serif;
        --section-font_size: 4vmax;
        --section-font_weight: bold;
        --section-font_style: normal;
        --section-text_align: center;
        --section-text_decoration: none;
        --section-text_shadow: 1px 1px 1px #3f494b;
        --section-text-line_height: 1.5;
      }
    /* ----------~(end)~---------- */

    /* ~  (Section SubTitle)  ~ */
      h2 {
        --section-text-margin: 0 auto;
        --section-text-padding: 10px 10px;
        --section-text-display: inline-block;
        --section-text-color: #fff;
        --section-font_family: 'Satoshi', sans-serif;
        --section-font_size: 2vmax;
        --section-font_weight: normal;
        --section-font_style: normal;
        --section-text_decoration: none;
        --section-text_align: center;
        --section-text_shadow: 1px 1px 1px #666;
        --section-text-line_height: 1.3;
      }
    /* ----------~(end)~---------- */

    header {
      margin: 0 0 20px 0;
    }

    @media screen and (min-width: 1281px) {
      padding-top: 120px;
    }

  /* For more settings go to ["styles/index.scss"] */
  /* =================|END|================= */
`;

const MyImage = styled.img`
  width: 320px;
  max-width: 100%;
  height: auto;
  display: block;
  position: relative;
  border-radius: 50%;
  box-shadow: 0 0 26px 3px rgba(255,255,255,0.06);
  box-sizing: border-box;
`;

const WebDevSectionStyle = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: 100%;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.83);
  --section-bg-s1-bg_image: url(${webDevWallpaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: overlay;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;
  scroll-margin-top: 90px;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 0 20px 0;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 4vmax;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: underline overline dotted #fff;
      text-underline-offset: 30%;
      --section-text_shadow: 1px 1px 1px #3f494b;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 0 20px 0;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 2vmax;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #666;
      --section-text-line_height: 1.3;
    }
    
    /* For more settings go to ["styles/index.scss"] */
`;

const ProjectsSectionStyle = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: 100%;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.6);
  --section-bg-s1-bg_image: url(${generalProjectsWallpaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: darken;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;
  scroll-margin-top: 90px;
  
  h1 {
    --section-text-margin: 0 auto;
    --section-text-padding: 20px 0 20px 0;
    --section-text-display: block;
    --section-text-color: #fff;
    --section-font_family: 'Satoshi', sans-serif;
    --section-font_size: 4vmax;
    --section-font_weight: bold;
    --section-font_style: normal;
    --section-text_align: center;
    --section-text_decoration: underline overline dotted #fff;
    text-underline-offset: 30%;
    --section-text_shadow: 1px 1px 1px #3f494b;
    --section-text-line_height: 1.5;
  }

  h2 {
    --section-text-margin: 0 auto;
    --section-text-padding: 0;
    --section-text-display: block;
    --section-text-color: #fff;
    --section-font_family: 'Satoshi', sans-serif;
    --section-font_size: 2vmax;
    --section-font_weight: normal;
    --section-font_style: normal;
    --section-text_decoration: none;
    --section-text_align: center;
    --section-text_shadow: 1px 1px 1px #666;
    --section-text-line_height: 1.3;
  }

  /* ~  (Section H3 Style)  ~ */
    h3 {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 2vmax;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: left;
      --section-text_shadow: 1px 1px 1px #333;
      --section-text-line_height: 1.5;

      &:hover {
        color: #aaa;
        text-shadow: 1px 1px 1px #111;
      }
    }
  /* ----------~(end)~---------- */

  header {
    top: 0;
    position: relative;
    scroll-margin-top: 90px;
  }

  .title {
    padding: 0 20px;
  }
  
  .icon-pos {
    &.left {
      text-align: left;
    }
    &.right {
      text-align: right;
    }
  }
  
  .projects-pos {
    margin: 20px 0 0 0;
  }

  .line {
    margin: 10px;
    border-bottom: 4px dotted #fff;
  }

  .form-item-pos {
    padding: 0 10px 40px 10px;
  }

  @media screen and (max-width:319px) {
    h3 {
      text-align: center !important;
    }

    .title {
      padding: 0;
    }
  }
   
  /* For more settings go to ["styles/index.scss"] */
`;

const ProjectForm = styled.article`
  /* ====== PROFILE FORM STYLE ====== */
    /* ~  (Form Settings)  ~ */
      --form-width: 100%;
      --form-max_width: 100%;
      --form-height: 100%;
      --form-position: relative;
      --form-display: block;
      --form-text-align: center;
      --form-bg-color: #f6f6f6;
      --form-padding: 0;
      --form-border-radius: 23px 60px 9px 60px;
      --form-border: none;
      --form-box-shadow: 0 0 9px 1px rgba(255, 255, 255, 0.3);
    /* ----------~(end)~---------- */

    /* ~  (Section H3 Style)  ~ */
      h4 {
        --section-text-margin: 0 auto;
        --section-text-padding: 10px 20px;
        --section-text-display: block;
        --section-text-color: #222 !important;
        --section-font_family: 'Roboto', sans-serif;
        --section-font_size: 20px;
        --section-font_weight: bold;
        --section-font_style: normal;
        --section-text_decoration: none;
        --section-text_align: center;
        --section-text_shadow: 1px 1px 1px #d2d2d2 !important;
        --section-text-line_height: 1.5;

        :hover {
          color: inherit !important;
        }
      }
    /* ----------~(end)~---------- */

    /* ~  (Section Paragraph Style)  ~ */
      p {
        --section-text-margin: 0 auto;
        --section-text-padding: 0 20px 15px 20px;
        --section-text-display: block;
        --section-text-color: #333;
        --section-font_family: 'Inter', sans-serif;
        --section-font_size: 16px;
        --section-font_weight: normal;
        --section-font_style: normal;
        --section-text_decoration: none;
        --section-text_align: left;
        --section-text_shadow: none;
        --section-text-line_height: 1.3;

        span {
          display: inline-block;
          margin-right: 3px;
          text-align: center !important;
          position: relative;
        }
      }
    /* ----------~(end)~---------- */

    a.repo {
      color: #2a9d90;
      font-style: oblique;
      font-weight: bold;
      font-family: inherit;

      &:hover {
        color: #0082cc;
      }
    }

    .title-container {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.01);
    }
    .rounded-bottom {
        border-radius: 0 0 9px 60px;
    }

    .description-container {
      background: linear-gradient(#f9f9f9, #fefefe);
      height: 125px;
      padding-top: 0;
      padding-bottom: 0;
      min-height: auto;
      display: block;
      overflow-y: auto;
      box-shadow: 0 3px 1px rgba(0,0,0,0.01);
    }

    .button-pos {
      width: 100%;
      position: absolute;
      bottom: -62px;
    }
    
    .details-icon {
      margin: 0 5px 0 0;
      color: #2a9d90;
    }

    .solid-line {
      border-bottom: 1px solid #f9f9f9;
    }

    .padding-top {
      padding: 15px 0 0 0;
    }
  /* =================|END|================= */

  @media screen and (max-width:375px) {
    p span {
      text-align: center;
      display: block;
    }
  }

  @media screen and (max-width:640px) {
    .description-container, .title-container {
      height: auto;
      min-height: auto;
      display: block;
    }
  }  
`;

const ArtSectionStyle = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: 100%;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(17,17,17, 0.9);
  --section-bg-s1-bg_image: url(${artWalppaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: overlay;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;
  scroll-margin-top: 90px;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 0 20px 0;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 4vmax;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: underline overline dotted #fff;
      text-underline-offset: 30%;
      --section-text_shadow: 1px 1px 1px #3f494b;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 0 20px 0;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 2vmax;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #666;
      --section-text-line_height: 1.3;
    }
    
    /* For more settings go to ["styles/index.scss"] */
`;

const AboutSectionStyle = styled.article`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: 100%;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(17,17,17, 0.9);
  --section-bg-s1-bg_image: url(${aboutWalppaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: overlay;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;
  scroll-margin-top: 90px;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 0 0 0;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 4vmax;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: underline overline dotted #fff;
      text-underline-offset: 30%;
      --section-text_shadow: 1px 1px 1px #3f494b;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 20px 0 20px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 2vmax;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #666;
      --section-text-line_height: 1.3;
    }

    p {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 20px 0 20px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: 'Satoshi', sans-serif;
      --section-font_size: 18px;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: left;
      --section-text_shadow: 1px 1px 1px #666;
      --section-text-line_height: 1.3;
    }
    
    /* For more settings go to ["styles/index.scss"] */
`;

const anstyle = {
  display: 'inline-block'
};

const MainPage = () => {
  let webDevRef = useRef(0);
  let projectsRef = useRef(0);
  let artRef = useRef(0);
  let aboutRef = useRef(0);
  let generalProjectsRef = useRef(0);
  let openSourceProjectsRef = useRef(0);
  let cmsProjectsRef = useRef(0);
  let mixedMediaProjectsRef = useRef(0);
  let uiuxRef = useRef(0);

  const [toggleGeneral, setToggleGeneral] = useState(false);
  const [toggleOpenSource, setToggleOpenSource] = useState(false);
  const [toggleCMS, setToggleCMS] = useState(false);
  const [toggleMixedMedia, setToggleMixedMedia] = useState(false);
  const [toggleUiUxDesign, setToggleUiUxDesign] = useState(false);

  return (
    <>
      <HeroSectionStyle id="#" className="grid section">
        <header className="grid-wrapper-column grid-col-center">
          <AnimationOnScroll animateIn="animate__jello">
            <h1>
              autoelektronický servis Bratislava
            </h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" style={anstyle}>
            <h2>&#x2022; Autodiagnostika</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" style={anstyle}>
            <h2>&#x2022; Alarmy a zabezpečovacie systémy</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" style={anstyle}>
            <h2>&#x2022; Parkovací asistenti</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" style={anstyle}>
            <h2>&#x2022; Montáže a opravy kamier</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" style={anstyle}>
            <h2>&#x2022; Servis rádií a multimediálnych systémov</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" style={anstyle}>
            <h2>&#x2022; auto radio</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" style={anstyle}>
            <h2>&#x2022; auto elektro</h2>
          </AnimationOnScroll>
        </header>
        <div className="grid-wrapper-column">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <MyImage width="320" height="320" fetchpriority="high" className="center" src={profilePicture} alt="aes-smiesko.sk autoelektrikar Bratislava logo" />
          </AnimationOnScroll>
        </div>
        <div className="grid-col-all">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <SoMe category="dev" />
          </AnimationOnScroll>
        </div>
        <div className="grid-col-all">
          <ButtonArrow className="center" onClick={webDevRef} />
        </div>
      </HeroSectionStyle>
      <WebDevSectionStyle id="o-mne" className="grid section" ref={webDevRef}>
        <header className="grid-wrapper-column grid-col-center">
          <h1>O mne</h1>
          <AnimationOnScroll animateIn="animate__slideInDown">
            <h2>Volám sa <i>Ing. Jozef Smieško</i> a v oblasti <b>automobilového priemyslu</b> pôsobím už viac ako
              tridsať rokov.</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>Mám inžiniersky titul z Technickej univerzity v Košiciach so špecializáciou v odbore
              nanotechnológie.</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>Som držiteľom <b>certifikácie pre montáž vozidlových zabezpečovacích systémov (Meta System)</b> a
              licencie na prevádzkovanie technickej služby.</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>Moja dlhoročná prax a odborné znalosti mi umožnili nadobudnúť komplexné skúsenosti v oblasti
              automechaniky a elektroniky, vďaka ktorým si dokážem poradiť aj s komplexnými problémami.</h2>
          </AnimationOnScroll>
        </header>
        <div className="grid-col-all">
          <ButtonRegular type="button" onClick={() => executeScroll(projectsRef)} btnMargin="20px auto" btnColor={whiteRegular} btnHover={buttonColor} btnTextColor="#111" btnTextHoverColor={whiteRegular} btnText="Ponúkané služby">
            <FontAwesomeIcon pull="right" icon={solid('automobile')} size="1x"/>
          </ButtonRegular>
        </div>
      </WebDevSectionStyle>
      <ProjectsSectionStyle id="ponukane-sluzby" className="grid section" ref={projectsRef}>
        <header className="grid-wrapper-column grid-col-center">
          <h1>Ponúkané služby</h1>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>U nás sa postaráme o elektroniku Vášho vozidla s profesionálnou starostlivosťou a prístupom. Ponúkame
              nasledovné služby:</h2>
          </AnimationOnScroll>
        </header>
        <section className="grid-wrapper-column">
          <section className="grid">
            <header id="montaze-a-opravy-kamier" className="grid-col-all clearfix cursor-pointer" onClick={() => {
              !toggleGeneral && executeScroll(generalProjectsRef);
              setToggleGeneral(!toggleGeneral);
            }} ref={generalProjectsRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={solid('video-camera')}/>
                </span>
                <em className="title">Montáže a opravy kamier</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleGeneral ? 180 : 0}/>
                </span>
              </h3>
            </header>
            <div className="grid-col-all line"/>
            {
              toggleGeneral && (
                <ArticleSection>
                  Zabezpečíme inštaláciu aj opravu predných a zadných kamier pre bezpečnú jazdu a parkovanie.
                </ArticleSection>
              )
            }
          </section>
          <section className="grid">
            <header id="opensource-projects" className="grid-col-all clearfix cursor-pointer" onClick={() => {
              !toggleOpenSource && executeScroll(openSourceProjectsRef);
              setToggleOpenSource(!toggleOpenSource);
            }} ref={openSourceProjectsRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={solid('play-circle')}/>
                </span>
                <em className="title">Servis rádií a multimediálnych systémov</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleOpenSource ? 180 : 0}/>
                </span>
              </h3>
            </header>
            <div className="grid-col-all line"/>
            {
              toggleOpenSource && (
                <ArticleSection>
                  Vylepšíme zvuk, opravíme poruchy a zaistíme, aby ste si jazdu užili naplno.
                </ArticleSection>
              )
            }
          </section>
          <section className="grid">
            <header id="alarmy-a-zabezpecovacie-systemy" className="grid-col-all clearfix cursor-pointer" onClick={() => {
              !toggleCMS && executeScroll(cmsProjectsRef);
              setToggleCMS(!toggleCMS);
            }} ref={cmsProjectsRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={solid('warning')}/>
                </span>
                <em className="title">Alarmy a zabezpečovacie systémy</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleCMS ? 180 : 0}/>
                </span>
              </h3>
            </header>
            <div className="grid-col-all line"/>
            {
              toggleCMS && (
                <ArticleSection>
                  Zvýšte bezpečnosť svojho auta s kvalitnými alarmami a imobilizérmi.
                </ArticleSection>
              )
            }
          </section>
          <section className="grid">
            <header id="parkovaci-asistenti" className="grid-col-all clearfix cursor-pointer" onClick={() => {
              !toggleMixedMedia && executeScroll(mixedMediaProjectsRef);
              setToggleMixedMedia(!toggleMixedMedia);
            }} ref={mixedMediaProjectsRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={solid('universal-access')}/>
                </span>
                <em className="title">Parkovací asistenti</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleMixedMedia ? 180 : 0}/>
                </span>
              </h3>
            </header>
            <div className="grid-col-all line"/>
            {
              toggleMixedMedia && (
                <ArticleSection>
                  Montáž a servis parkovacích senzorov a kamier pre pohodlné a bezpečné parkovanie.
                </ArticleSection>
              )
            }
          </section>
          <section className="grid">
            <header id="autodiagnostika " className="grid-col-all clearfix cursor-pointer" onClick={() => {
              !toggleUiUxDesign && executeScroll(uiuxRef);
              setToggleUiUxDesign(!toggleUiUxDesign);
            }} ref={uiuxRef}>
              <h3>
                <span className="left icon-pos">
                  <FontAwesomeIcon icon={solid('automobile')}/>
                </span>
                <em className="title">Autodiagnostika</em>
                <span className="right icon-pos">
                  <FontAwesomeIcon icon={solid('chevron-down')} rotation={toggleUiUxDesign ? 180 : 0}/>
                </span>
              </h3>
            </header>
            <div className="grid-col-all line"/>
            {
              toggleUiUxDesign && (
                <ArticleSection>
                  Komplexná diagnostika elektronických systémov Vášho auta pre presné zistenie a efektívne riešenie prípadných problémov.
                </ArticleSection>
              )
            }
          </section>
        </section>
        <ButtonArrow className="grid-wrapper-column center" onClick={artRef}/>
      </ProjectsSectionStyle>
      <ArtSectionStyle id="cennik" className="grid section" ref={artRef}>
        <header className="grid-wrapper-column grid-col-center">
          <h1>Cenník</h1>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>
              Cena v našom servise sa skladá z ceny práce a ceny jednotlivých menených dielov.
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>Hodinová sadzba za prácu je 30 eur a je vopred známa, zatiaľ čo cena menených dielov je zákazníkovi oznamovaná pred samotným začiatkom práce na vozidle.</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>Súčasťou nášho autoelektro servisu je aj diagnostika, ktorá je takisto spoplatnená. Zákazník súhlasí s jej vykonaním pri odovzdávaní vozidla a je si vedomý, že ide o platenú službu.</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h2>Je dôležité poznamenať, že odhadnúť presný čas práce je pri danom type služieb náročné. Naším cieľom je však zabezpečiť transparentnosť a spokojnosť našich zákazníkov.</h2>
          </AnimationOnScroll>
        </header>
        <ButtonArrow className="grid-col-all center" onClick={aboutRef} />
      </ArtSectionStyle>
      <AboutSectionStyle id="kontakt" className="grid section" ref={aboutRef}>
        <header className="grid-wrapper-column grid-col-center">
          <h1>
            Kontakt
          </h1>
          <h2>Borekova 30, 82106 Bratislava</h2>
        </header>
        <div className="grid-col-4-10">
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7355930112085!2d17.19434652537323!3d48.13462220136829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c88a42bc660c5%3A0xc75bc0547f8fc7a8!2sAutoelektronick%C3%BD%20servis%2C%20Ing.%20Jozef%20Smie%C5%A1ko!5e0!3m2!1sen!2ssk!4v1735309953870!5m2!1sen!2ssk"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="autoelektrikar Bratislava - aes-smiesko | Borekova 30, 82106 Bratislava"
            ></iframe>
          </p>
        </div>
        <div className="grid-wrapper-column center">
          <div className="phoneNumber margin20">
            <FontAwesomeIcon icon={solid('phone')} size="1x"/> +421 905 627 526
          </div>
        </div>
        <div className="grid-wrapper-column">
          <ButtonRegular className="center" linkRef="mailto:joz.smiesko@gmail.com" btnMargin="20px auto" btnColor={whiteRegular} btnHover={buttonColor} btnTextColor="#000" btnTextHoverColor={whiteRegular} btnText="joz.smiesko@gmail.com">
            <FontAwesomeIcon pull="right" icon={solid('envelope')} size="1x" />
          </ButtonRegular>
        </div>
        <div className="grid-wrapper-column">
          <SoMe category="reach" />
        </div>
      </AboutSectionStyle>
    </>
  );
};

const ArticleSection = (props) => (
  <div className="grid-col-all grid-list-1reg-1lrg-1mid-1sml projects-pos">
    <div className="form-item-pos" animateIn="animate__fadeInUp">
      <ProjectForm className="grid form">
        <div className="grid-col-all rounded-bottom">
          <h4 className="title-container">
            {props.children}
          </h4>
        </div>
      </ProjectForm>
    </div>
  </div>
);

export default MainPage;