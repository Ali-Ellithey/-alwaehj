import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next"; // استيراد الهوك

export const AboutUS = () => {
  const { t } = useTranslation();

  // تعريف البيانات باستخدام مفاتيح الترجمة (Keys) لضمان تغيرها عند تبديل اللغة
  const tabsData = {
    chauffeur: [
      {
        image: "Public/سعر-سيارة-بنتلي-بينتايجا-جديدة-.jpg",
        title: t("about.luxury"),
      },
      {
        image:
          "public/5f0d5229e9c27Ford_Bronco_4_door_2021_front_dubai_uae.jpg",
        title: t("about.suv"),
      },
      { image: "public/فيات-الإيطالية.jpeg", title: t("about.economy") },
    ],
    airport: [
      {
        image: "public/ليموزين المطار.jpg",
        title: t("about.airport_basic"),
      },
      { image: "public/كبار الشخصيات.jpg", title: t("about.vip_service") },
    ],
    needs: [
      {
        image: "public/سعر-سيارة-بنتلي-بينتايجا-جديدة-.jpg",
        title: t("about.luxury"),
      },
      {
        image:
          "public/5f0d5229e9c27Ford_Bronco_4_door_2021_front_dubai_uae.jpg",
        title: t("about.suv"),
      },
      { image: "public/فيات-الإيطالية.jpeg", title: t("about.economy") },
    ],
  };

  const [activeTab, setActiveTab] = useState("chauffeur");
  const dataToDisplay = tabsData[activeTab];

  return (
    <div className="AboutUS py-1" id="About">
      <Container>
        <div className="title text-center mb-5">
          <h6 style={{ color: "#fc8b1a" }}>{t("about.sub_title")}</h6>
          <h2 className="fw-bold">{t("about.main_title")}</h2>
        </div>

        <div className="content">
          <Row className="gy-4">
            <Col lg={8} sm={12}>
              <div className="leftText">
                <div className="tabss d-flex justify-content-around p-0 border-bottom mb-4">
                  {Object.keys(tabsData).map((tab) => (
                    <Button
                      key={tab}
                      className={`btn-link rounded-0 border-0 py-3 ${
                        activeTab === tab
                          ? "active border-bottom border-primary border-3 fw-bold"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        flexGrow: 1,
                        textAlign: "center",
                        textDecoration: "none",
                      }}
                    >
                      {t(`about.tabs.${tab}`)}
                    </Button>
                  ))}
                </div>

                <Zoom key={activeTab}>
                  <div className="TableContent">
                    <Row className="justify-content-center">
                      {dataToDisplay.map((item, index) => (
                        <Col
                          key={index}
                          xs={12}
                          sm={6}
                          lg={4}
                          className="mb-4 d-flex justify-content-center"
                        >
                          <Card
                            className="shadow-sm border-0"
                            style={{
                              width: "100%",
                              maxWidth: "20rem",
                              height: "350px",
                            }}
                          >
                            <Card.Img
                              variant="top"
                              src={item.image}
                              alt={item.title}
                            style={{
                    width: "180%",
                    aspectRatio: "16 / 9",
                    objectFit: "contain",
                  }}
                            />
                            <Card.Body className="d-flex flex-column justify-content-between text-center">
                              <Card.Title
                                className="fw-bold"
                                style={{ color: "#212741" }}
                              >
                                {item.title}
                              </Card.Title>
                              <Button
                                variant="primary"
                                style={{
                                  backgroundColor: "#fc8b1a",
                                  border: "none",
                                }}
                                className="w-100 mt-auto fw-bold"
                              >
                                {t("book_now")}
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Zoom>
              </div>
            </Col>

            <Col lg={4} sm={12}>
              <div
                className="rightText p-4 rounded-4 shadow-sm h-80 border-0"
                style={{
                  backgroundColor: "#f8f9fa",
                  transition: "transform 0.3s ease", // إضافة تأثير بسيط عند التحويم
                }}
              >
                {/* العنوان الرئيسي */}
                <h4
                  className="fw-bold mb-4"
                  style={{
                    lineHeight: "1",
                    color: "#212741",
                    fontSize: "1.4rem",
                    borderBottom: "2px solid #fc8b1a",
                    paddingBottom: "10px",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  {t("about.right_side.title")}
                </h4>

                {/* النصوص التفصيلية */}
                <div
                  className="text-muted"
                  style={{
                    textAlign: "justify",
                    lineHeight: "1.8", // زيادة المسافة بين الأسطر لسهولة القراءة
                    fontSize: "0.95rem",
                  }}
                >
                  <p className="mb-3">
                    <strong style={{ color: "#fc8b1a", fontWeight: "700" }}>
                      {t("about.suv")}
                    </strong>
                    <span className="mx-1">:</span>
                    {t("about.right_side.suv_text")}
                  </p>

                  <p className="mb-3">
                    <strong style={{ color: "#fc8b1a", fontWeight: "700" }}>
                      {t("about.luxury")}
                    </strong>
                    <span className="mx-1">:</span>
                    {t("about.right_side.luxury_text")}
                  </p>

                  <p className="mb-0">
                    <strong style={{ color: "#fc8b1a", fontWeight: "700" }}>
                      {t("about.economy")}
                    </strong>
                    <span className="mx-1">:</span>
                    {t("about.right_side.economy_text")}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutUS;
