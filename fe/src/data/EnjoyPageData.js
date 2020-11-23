// icons
import icon_press from "../images/enjoy/icon_coffee_press.png";
import icon_pourover from "../images/enjoy/icon_pour_over.png";
import icon_icepourover from "../images/enjoy/icon_iced_poure_over.png";
import icon_coffeemaker from "../images/enjoy/icon_coffee_brewer.png";
// number
import num1 from "../images/enjoy/icon_coffee_info_01.png";
import num2 from "../images/enjoy/icon_coffee_info_02.png";
import num3 from "../images/enjoy/icon_coffee_info_03.png";
import num4 from "../images/enjoy/icon_coffee_info_04.png";
import num5 from "../images/enjoy/icon_coffee_info_05.png";
import num6 from "../images/enjoy/icon_coffee_info_06.png";
// tip
import tip from "../images/enjoy/icon_coffee_info_tip.png";

// press
import press1 from "../images/enjoy/coffee_press_img01.jpg";
import press2 from "../images/enjoy/coffee_press_img02.jpg";
import press3 from "../images/enjoy/coffee_press_img03.jpg";
import press4 from "../images/enjoy/coffee_press_img04.jpg";

// pourover
import pourover1 from "../images/enjoy/coffee_poureOver_img01.jpg";
import pourover2 from "../images/enjoy/coffee_poureOver_img02.jpg";
import pourover3 from "../images/enjoy/coffee_poureOver_img03.jpg";
import pourover4 from "../images/enjoy/coffee_poureOver_img04.jpg";
import pourover5 from "../images/enjoy/coffee_poureOver_img05.jpg";
// ice
import icepourover1 from "../images/enjoy/coffee_iced_poureOver_img01.jpg";
import icepourover2 from "../images/enjoy/coffee_iced_poureOver_img02.jpg";
import icepourover3 from "../images/enjoy/coffee_iced_poureOver_img03.jpg";
import icepourover4 from "../images/enjoy/coffee_iced_poureOver_img04.jpg";
import icepourover5 from "../images/enjoy/coffee_iced_poureOver_img05.jpg";
import icepourover6 from "../images/enjoy/coffee_iced_poureOver_img06.jpg";

//maker
import maker1 from "../images/enjoy/coffee_brewer_img01.jpg";
import maker2 from "../images/enjoy/coffee_brewer_img02.jpg";
import maker3 from "../images/enjoy/coffee_brewer_img03.jpg";

const press = {
    top : {
        title : "커피 프레스",
        desc : "커피 프레스를 이용해서 커피를 만들면 커피 필터에 의해 천연 오일이 유지될 뿐 아니라 커피의 모든 풍미가 추출됩니다. 풍부하고 깊은 일관된 풍미 또한 사라지지 않습니다.",
        icon : ""
    },
    video : {},
    bottom : {
        1 : {
            img :"",
            title : "그라인딩 및 계량하기",
            desc : "바다 소금 크기로 굵게 그라인딩된 커피를 프레스에 넣고, 물 6온스 당 커피 2테이블스푼을 계량해서 넣어주세요.",
            tip : "커피는 농산품과 같다는 점을 기억하세요.<br/>소량으로 자주 구입해야 가장 신선하게 즐길 수 있습니다."
        },
        2 : {
            img :"",
            title : "뜨거운 물 더하기",
            desc : "갓 끓인 뜨거운 물을 프레스에 채워주세요. 그라인딩된 커피를 모두 적셔주세요.",
            tip : "최상의 풍미를 내려면 필터로 여과한 물이나 생수를 사용하세요."
        },
        3 : {
            img :"",
            title : "플런저(plunger) 올리고 커피 우려내기",
            desc : "플런저를 프레스 위에 올려놓고 4분간 커피를 우려주세요. 이 때 플런저를 아래로 누르지 마세요.",
        },
        4 : {
            img :"",
            title : "누르고 커피 따르기",
            desc : "플런저가 프레스 바닥에 닿을 때까지 천천히 아래로 눌러주세요. 그리고 커피를 즐기면 됩니다.",
        },
    }
}
const pourover = {
    top : {
        title : "푸어 오버",
        desc : "푸어 오버는 놀랍도록 쉽고 간편하게 깔끔하고 완전한 풍미와 바디감을 지닌 한 컵의 커피를 만들 수 있는 방법입니다.",
        icon :""
    },
    video : {},
    bottom : {
        1 : {
            img :"",
            title : "계량 및 끓이기",
            desc : "커피를 만드는 데 사용할 물을 원하는 만큼 계량하고, 필터를 헹굴 물을 조금 추가해서 끓여주세요.",
        },
        2 : {
            img :"",
            title : "미리 필터 적시기",
            desc : "필터를 뜨거운 물로 살짝 헹구고, 헹군 물은 버려주세요. 이렇게 하면 가장 순수한 풍미를 지닌 커피를 만들 수 있습니다.",
        },
        3 : {
            img :"",
            title : "계량 및 그라인딩하기",
            desc : "다음으로 커피를 계량합니다. 종이로 된 필터에 그라인딩된 커피를 넣으세요. 설탕 알갱이 크기의 비교적 곱게 그라인딩된 커피를 사용합니다. 물 6온스 당 커피 2테이블스푼을 계량하세요.",
        },
        4 : {
            img :"",
            title : "물 붓고 기다리기",
            desc : "갓 끓인 뜨거운 물을 이용해서 그라인딩된 커피가 젖도록 필터의 절반 정도를 채워주세요. 커피의 풍미가 잘 드러날 수 있도록 10초 정도 기다립니다. 커피가 물과 골고루 섞이면서 풍미가 나타나기 시작합니다.",
        },
        5 : {
            img :"",
            title : "물 마저 붓고 커피 즐기기",
            desc : "남은 물을 천천히 부어주세요. 그라인딩된 커피가 전부 젖을 수 있도록 규칙적으로 조그만 원을 그리듯이 물을 붓습니다. 그리고 곧바로 커피를 즐깁니다.",
            tip : "푸어 오버 시 항상 동일한 맛을 내도록 하려면 타이머를 사용하세요.<br/>1컵을 만드는 데 약 3분 정도가 소요되도록 합니다."
        },
    }
}
const icepourover = {
    top : {
        title : "아이스 푸어 오버",
        desc : "아이스 브루드는 한 번에 깊고 풍부한 풍미를 내는 아이스 커피 한 피처를 만드는 쉽고 간단한 방법입니다.",
        icon :""
    },
    video : {},
    bottom : {
        1 : {
            img :"",
            title : "필터를 미리 적시기",
            desc : "필터를 뜨거운 물로 살짝 헹구고, 헹군 물은 버려주세요. 이렇게 하면 가장 순수한 풍미를 지닌 커피를 만들 수 있습니다.",
        },
        2 : {
            img :"",
            title : "적합하게 그라인딩된 커피 찾기",
            desc : "종이 필터에 그라인딩된 커피를 넣으세요. 설탕 알갱이 크기의 비교적 곱게 그라인딩된 커피를 사용합니다.",
        },
        3 : {
            img :"",
            title : "계량하기",
            desc : "아이스 푸어 오버는 두 배로 진하게 만든 후 얼음을 넣어 희석시킵니다. 그러므로 뜨거운 물 6온스 당 커피 4테이블스푼을 계량하세요.",
        },
        4 : {
            img :"",
            title : "물 붓고 기다리기",
            desc : "갓 끓인 뜨거운 물을 이용해서 그라인딩된 커피가 젖도록 필터의 절반 정도를 채워주세요. 커피의 풍미가 잘 드러날 수 있도록 10초 정도 기다립니다. 커피가 물과 골고루 섞이면서 풍미가 나타나기 시작합니다.",
        },
        5 : {
            img :"",
            title : "물 마저 붓고 커피 즐기기",
            desc : "남은 물을 천천히 부어주세요. 그라인딩된 커피가 전부 젖을 수 있도록 규칙적으로 조그만 원을 그리듯이 물을 붓습니다. 그리고 곧바로 커피를 즐깁니다.",
        },
        6 : {
            img :"",
            title : "얼음 더하기",
            desc : "만들어진 커피에 얼음을 넣고 바로 즐기세요.",
            tip : "훌륭한 바디감과 톡쏘는 시트러스 향기를 가진 아프리카 커피는 아이스 푸어 오버로 즐기기 좋습니다."
        },
    }
}
const coffemaker = {
    top : {
        title : "커피 메이커",
        desc : "드립 커피는 간편하게 훌륭한 커피를 만들 수 있는 방법입니다. 커피 브루어에 적합하게 그라인딩된 커피와 깨끗한 물을 이용해서 환상적인 커피를 만들 수 있습니다.",
        icon :""
    },
    video : {},
    bottom : {
        1 : {
            img :"",
            title : "적합하게 그라인딩된 커피 찾기",
            desc : "바닥이 평평한 필터의 경우 바다 소금 정도의 중간 크기로 그라인딩된 커피를 사용하세요. 콘 형태의 필터의 경우에는 설탕 알갱이 크기의 곱게 그라인딩된 커피를 사용하세요.",
        },
        2 : {
            img :"",
            title : "계량 하기",
            desc : "물 6온스 당 신선하게 그라인딩된 커피 2테이블스푼을 계량하세요.",
            tip : ""
        },
        3 : {
            img :"",
            title : "커피 만들어 즐기기",
            tip : "브루어를 이용해 만든 커피는 신선하게 마셔야 가장 맛있습니다.<br/>한 번에 마실 정도의 커피를 만드세요. 커피를 다시 데우면 풍미가 약해질 수 있습니다.",
        },
    }
}

export { press,pourover,icepourover,coffemaker};