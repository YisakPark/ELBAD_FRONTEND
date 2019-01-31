const get_select_field_birthday = () => {
  const birthday = {};
  birthday.year = {};
  birthday.year.values = [];
  birthday.year.contents = [];
  birthday.month = {};
  birthday.month.values = [];
  birthday.month.contents = [];
  birthday.date = {};
  birthday.date.values = [];
  birthday.date.contents = [];
  const lowest_year = 1900;
  const highest_year = 2019;
  const lowest_month = 1;
  const highest_month = 12;
  const lowest_date = 1;
  const highest_date = 31;
  let i;
  for (i = lowest_year; i <= highest_year; i++) {
    birthday.year.values.push(`${i}`);
    birthday.year.contents.push(`${i}`);
  }
  for (i = lowest_month; i <= highest_month; i++) {
    birthday.month.values.push(`${i}`);
    birthday.month.contents.push(`${i}`);
  }
  for (i = lowest_date; i <= highest_date; i++) {
    birthday.date.values.push(`${i}`);
    birthday.date.contents.push(`${i}`);
  }
  return birthday;
};

export const select_field_company_type = {
  values: ["corporate_business", "individual_business", "free_lancer"],
  contents: ["법인사업자", "개인사업자", "프리랜서"]
};

export const select_field_birthday = get_select_field_birthday();

export const select_field_region = {
  values: [
    "전국",
    "서울특별시",
    "강원도",
    "경기도",
    "경상남도",
    "경상북도",
    "전라남도",
    "전라북도",
    "충청남도",
    "충청북도",
    "광주광역시",
    "대구광역시",
    "대전광역시",
    "부산광역시",
    "울산광역시",
    "인천광역시",
    "세종특별자치시",
    "제주특별자치시"
  ],
  contents: [
    "전국",
    "서울특별시",
    "강원도",
    "경기도",
    "경상남도",
    "경상북도",
    "전라남도",
    "전라북도",
    "충청남도",
    "충청북도",
    "광주광역시",
    "대구광역시",
    "대전광역시",
    "부산광역시",
    "울산광역시",
    "인천광역시",
    "세종특별자치시",
    "제주특별자치시"
  ]
};

export const select_field_creator_category = {
  values: [
    "뷰티&패션",
    "게임&어플",
    "건강&운동",
    "반려동물",
    "신제품",
    "음식",
    "기타"
  ],
  contents: [
    "뷰티&패션",
    "게임&어플",
    "건강&운동",
    "반려동물",
    "신제품",
    "음식",
    "기타"
  ]
};
