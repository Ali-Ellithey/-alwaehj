import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Badge,
} from "react-bootstrap";
import { FaWhatsapp, FaGasPump, FaUsers, FaCogs } from "react-icons/fa";

// استيراد الصور
import img1 from "../../img_car/سعر-سيارة-بنتلي-بينتايجا-جديدة-.jpg";
import img2 from "../../img_car/5f0d5229e9c27Ford_Bronco_4_door_2021_front_dubai_uae.jpg";

const FamilyCarsDetails = () => {
  const familyCars = [
    {
      id: 1,
      name: "بنتلي بينتايجا العائلية",
      // الصور مع سنة الموديل لكل واحدة
      images: [
        { src: img1, year: "2024" },
        { src: img2, year: "2023" },
        { src: img1, year: "2025" },
      ],
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V12" },
      whatsappLink:
        "https://wa.me/9659030061?text=أريد حجز بنتلي بينتايجا العائلية",
    },
    {
      id: 2,
      name: "مرسيدس مايباخ العائلية",
      images: [
        { src: img1, year: "2024" },
        { src: img1, year: "2022" },
      ],
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
      whatsappLink:
        "https://wa.me/9659030061?text=أريد حجز مرسيدس مايباخ العائلية",
    },
  ];

  return (
    <>
      {/* 📺 Section 1: Video Showcase Section */}
      <section
        className="video-section py-0 py-md-5"
        style={{ backgroundColor: "#2a2a2aff" }}
      >
        <Container fluid className="px-0 px-md-3">
          <Row className="justify-content-center mx-0">
            <Col lg={11} className="px-0">
              <div
                className="position-relative overflow-hidden responsive-video-wrapper"
                style={{
                  height: "60vh",
                  minHeight: "350px",
                  maxHeight: "600px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <source
                    src="public/videos/اكتشف المغامرة معنا (4).mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.4) 100%)",
                  }}
                ></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🚗 Section 2: Fleet Description */}
      <Container className="my-5" dir="rtl">
        <h2 className="text-center font-weight-bold">
          أسطول السيارات العائلية الفاخرة
        </h2>
        <div
          className="mx-auto mt-2"
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#fc8b1a",
            borderRadius: "2px",
          }}
        ></div>

        <Row className="gx-4 gy-4 my-4">
          {familyCars.map((car) => (
            // التعديل هنا: lg={6} لظهور كرتين في السطر باللابتوب
            <Col key={car.id} xs={12} lg={6}>
              <Card className="shadow-sm border-0 h-100 overflow-hidden">
                <Carousel interval={null} indicators={true}>
                  {car.images.map((imgObj, index) => (
                    <Carousel.Item key={index}>
                      <div
                        className="position-relative"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        {/* 🏷️ شارة سنة الموديل المتحركة مع الصور */}
                        <Badge
                          pill
                          className="position-absolute shadow-sm"
                          style={{
                            top: "15px",
                            right: "15px",
                            backgroundColor: "#fc8b1a",
                            padding: "8px 15px",
                            zIndex: "10",
                            fontSize: "0.9rem",
                          }}
                        >
                          موديل {imgObj.year}
                        </Badge>

                        <img
                          className="d-block w-100"
                          src={imgObj.src}
                          alt={`موديل ${imgObj.year}`}
                          style={{
                            aspectRatio: "16 / 9",
                            objectFit: "contain", // إظهار كامل السيارة
                            padding: "5px",
                          }}
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                <Card.Body className="text-center p-4">
                  <Card.Title className="fw-bold mb-3 fs-4">
                    {car.name}
                  </Card.Title>

                  <Row className="text-center mb-4 bg-light p-3 rounded mx-0 shadow-sm">
                    <Col xs={4}>
                      <FaUsers color="#fc8b1a" size={20} />
                      <div
                        className="mt-1 fw-bold"
                        style={{ fontSize: "13px" }}
                      >
                        {car.specs.passengers} ركاب
                      </div>
                    </Col>
                    <Col xs={4}>
                      <FaCogs color="#fc8b1a" size={20} />
                      <div
                        className="mt-1 fw-bold"
                        style={{ fontSize: "13px" }}
                      >
                        {car.specs.transmission}
                      </div>
                    </Col>
                    <Col xs={4}>
                      <FaGasPump color="#fc8b1a" size={20} />
                      <div
                        className="mt-1 fw-bold"
                        style={{ fontSize: "13px" }}
                      >
                        {car.specs.engine}
                      </div>
                    </Col>
                  </Row>

                  <Button
                    variant="success"
                    href={car.whatsappLink}
                    target="_blank"
                    className="w-100 d-flex align-items-center justify-content-center py-3 shadow-sm"
                    style={{
                      borderRadius: "12px",
                      fontWeight: "bold",
                      gap: "10px",
                      backgroundColor: "#25D366",
                      border: "none",
                    }}
                  >
                    <FaWhatsapp size={24} />
                    احجزها الآن
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .responsive-video-wrapper {
          border-radius: 24px;
        }
        @media (max-width: 767px) {
          .responsive-video-wrapper {
            border-radius: 0px !important;
            height: 45vh !important;
          }
        }
      `}</style>
    </>
  );
};

export default FamilyCarsDetails;
