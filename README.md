# 🥗 SALAD
### 사용자의 목표에 맞는 커스텀 샐러드 주문 앱
SALAD는 사용자에게 개인화된 체중 목표를 설정할 수 있게 하고, 목표에 따른 샐러드 커스텀 주문 서비스를 지원하는 프로그램입니다. <br>
Vite + Vue3 기반의 프로젝트이며 모바일 기기 화면에 최적화된 UI를 제공합니다. <br>

<br>

## ✋🏻 개요 

- 프로젝트 이름 : SALAD
- 진행 기간 : 2024.07.24 ~ 
- [배포 주소](https://salad-vert.vercel.app/)

<br>

## 🧩 팀원 소개

| <img src="https://github.com/user-attachments/assets/6aec1026-b507-4c78-92eb-21670bf6e4de" width="150" height="150"> | <img src="https://github.com/user-attachments/assets/b5a24df4-177b-4fde-a5a8-a54d04570032" width="150" height="150"> |
|:---:|:---:|
| **박선정** | **유혜인(PM)** |
| [@adooooore](https://github.com/adooooore) | [@yu-hazel](https://github.com/yu-hazel) |
| PM, Designer | FE Developer |

<br>

## 🥞 기술 스택

### WireFrame & Design Prototype
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Development & Hosting
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

### Environment
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

<br>

## 📋 미리 보기

### 사용자 목표 설정 및 테스트 로그인
![salad1](https://github.com/user-attachments/assets/7379b92b-fd1d-4311-b796-82641e5a0f1c) | ![salad6](https://github.com/user-attachments/assets/ed658e1f-6270-483f-b61f-355546b8ab20) | ![salad9](https://github.com/user-attachments/assets/60c583b4-9602-45d1-85b4-d93e9a37d1ea)
| :----: | :----: | :---: |
| 사용자별 맞춤 칼로리 계산 | 테스트 로그인 페이지 | 계산된 목표 변경 |


### 커스텀 샐러드 주문 로직 및 장바구니 관리
![salad2](https://github.com/user-attachments/assets/5627c2fd-f347-4bdd-9d37-84c412bdfce6) | ![salad3](https://github.com/user-attachments/assets/d439a005-f14a-4bb2-b643-1e02b325f4eb) | ![salad5](https://github.com/user-attachments/assets/6e8ddb30-5bc5-4147-bd93-44f9078470af)
| :----: | :----: | :---: |
| 샐러드 주문 페이지 | 결제 전 재료 추가 및 삭제 | 장바구니에 담은 조합 관리 |


### 주문서 작성 및 주문 완료 페이지
![salad4](https://github.com/user-attachments/assets/c4444b49-3196-43f3-95ee-7fd69f2b98d5) | ![salad8](https://github.com/user-attachments/assets/7cc9a13a-1bbb-41d1-be9e-d6512ad026a4) | ![salad7](https://github.com/user-attachments/assets/621fe32b-6ce9-46bd-ae3e-ff53e5d79fe7)
| :----: | :----: | :---: |
| 주문할 샐러드 조합 확인<br>배송지 목록, 주문 메모 선택 | 신규 배송지 추가 기능 | 최종 결제금액 확인 및 주문 완료 페이지 |

<br>

## 🐳 주요 기능 및 특징

- **Vue-router를 이용한 동적 라우팅 구현**
  - SPA 구현 : Vue-router를 사용하여 페이지 간의 동적 탐색이 가능한 SPA 구조를 구현하였습니다. 사용자는 페이지 리로드 없이 빠르게 원하는 기능에 접근할 수 있는 매끄러운 UX를 제공합니다.
  - 경로 이동 시 상태 관리 : 사용자가 특정 경로에서 다른 경로로 이동할 때 발생할 수 있는 상태 손실을 방지하기 위해, 로컬 스토리지를 활용해 데이터를 지속적으로 관리했습니다.

- **LocalStorage를 이용한 사용자 데이터 저장**
  - 기능 선택 이유 : 사용자 주문 상태와 재료 선택 등의 데이터를 지속적으로 관리하기 위해 LocalStorage를 활용하였습니다. 이로 인해 페이지 새로고침이나 재방문 시에도 사용자의 데이터를 유지할 수 있습니다.
  - 데이터 저장 및 로드 : 사용자의 샐러드 주문 정보와 선택한 재료, 배송지 정보 등을 LocalStorage에 저장하여 사용자가 앱을 다시 열었을 때 이전에 선택한 내용을 그대로 불러올 수 있도록 구현했습니다.

- **사용자 친화적인 샐러드 주문 경험**
  - 재료 선택 기능 : 사용자가 다양한 재료를 선택하여 자신만의 샐러드를 커스터마이징할 수 있도록 하였으며, 선택된 재료의 영양 정보를 실시간으로 제공하여 건강을 고려한 커스텀을 돕습니다.
  - 정기배송 기간 선택 : 사용자가 1주, 2주, 3주 중 정기배송 기간을 선택할 수 있으며, 선택한 기간에 따라 결제 금액이 자동으로 계산됩니다. 이를 통해 사용자는 보다 편리하게 주문을 관리할 수 있습니다.
  - 주문 요약 및 결제: 주문 내역을 확인하고 결제까지의 모든 과정을 하나의 흐름에서 진행할 수 있도록 구성하여, 사용자의 편의성을 극대화했습니다.

<br>

## 🪴 개선 목표

- OAuth를 통한 소셜 로그인 기능 제공
- 로컬 스토리지에서 supabase로의 데이터 마이그레이션

<br>
