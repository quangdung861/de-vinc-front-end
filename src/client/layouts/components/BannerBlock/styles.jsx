import styled, { Styled } from "styled-components";
import bgTemplate from "client/assets/images/bg-template.png"

export const Wraper = styled.div`
/* background-color: rgba(0, 0, 0, 0.2); */
background-blend-mode: multiply; /* Áp dụng chế độ blend */
background-image: url(${props => props.$image});
background-repeat: no-repeat;
background-size: cover;
padding-top: 30%;
.banner-container {
    .banner-content {
        .banner-content-left {
            margin-top: -200px;
            padding: 0 0 80px 32px;
            .title-banner {
                font-size: 80px;
                font-weight: 700;
                margin-bottom: 8px;                 
            }
            .describe-banner {
                font-size: 16px;
                margin-bottom: 36px;
            }
            .btn-custom {
                padding: 18px 40px;
                border-radius: 50px;
            }
        }
        .banner-content-right {}
    }
}
@media only screen and (max-width: 992px) {
    .banner-container {
    .banner-content {
        .banner-content-left {
            .title-banner {
                font-size: 60px;
            }
            .describe-banner {
            }
            .btn-custom {
            }
        }
        .banner-content-right {}
    }
    }
}
@media only screen and (max-width: 768px) {
    .banner-container {
    .banner-content {
        .banner-content-left {
            padding: 0 0 40px 32px;
            .title-banner {
                font-size: 40px;
            }
            .describe-banner {
            }
            .btn-custom {
                padding: 8px 32px;
            }
        }
        .banner-content-right {}
    }
    }
}
@media only screen and (max-width: 562px) {
    .banner-container {
    .banner-content {
        .banner-content-left {
            .title-banner {
                font-size: 30px;
            }
            .describe-banner {
            }
            .btn-custom {
            }
        }
        .banner-content-right {}
    }
    }
}
`