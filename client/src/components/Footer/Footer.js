import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Flag from "./Flag";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { FooterStyled, Li, Line, Ul } from "./style/style";
import { LiPhone, FooterStyledPhone } from "./style/phone.style";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const changeFooter = useMediaQuery("(min-width:650px)");
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  };
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      handleChangeLanguage(localStorage.getItem("lang"));
      setLang(localStorage.getItem("lang"));
    }
    return () => {
      localStorage.setItem("lang", lang);
    };
  }, []);
  return (
    <Grid style={{ margin: "auto 0px 15px 0px" }} container justify="center">
      <Grid item sm={10} xs={12}>
        <Line></Line>
      </Grid>
      <Grid item sm={10} xs={12}>
        {changeFooter ? (
          <FooterStyled>
            <span data-test="copyright">&copy; 2021 Robert Jaskólski</span>
            <span>
              <Ul>
                <Li
                  onClick={() => {
                    switch (lang) {
                      case "en":
                        handleChangeLanguage("pl");
                        setLang("pl");
                        break;
                      case "pl":
                        handleChangeLanguage("en");
                        setLang("en");
                        break;

                      default:
                        handleChangeLanguage("en");
                        setLang("en");
                        break;
                    }
                  }}
                >
                  <Flag lang={lang} />
                </Li>
                <a
                  href="https://github.com/RobertJaskolski"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Li data-test="links">Github</Li>
                </a>
                <a
                  href="https://www.linkedin.com/in/robert-jask%C3%B3lski-b207351a4/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Li data-test="links">Linkedin</Li>
                </a>
                <a href="mailto:robertjaskolski98@gmail.com">
                  <Li data-test="links">Contact</Li>
                </a>
              </Ul>
            </span>
          </FooterStyled>
        ) : (
          <FooterStyledPhone>
            <span data-test="copyright">&copy; 2021 Robert Jaskólski</span>
            <span>
              <Ul>
                <LiPhone>
                  <Flag lang="pl" />
                </LiPhone>
                <LiPhone data-test="links">
                  <a
                    href="https://github.com/RobertJaskolski"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </LiPhone>
                <LiPhone data-test="links">
                  <a
                    href="https://www.linkedin.com/in/robert-jask%C3%B3lski-b207351a4/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </LiPhone>
                <LiPhone data-test="links">Contact</LiPhone>
              </Ul>
            </span>
          </FooterStyledPhone>
        )}
      </Grid>
    </Grid>
  );
}
