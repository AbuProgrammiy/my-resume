import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  constructor(private render:Renderer2) {
    this.changeLang("English")
  }

  title = 'my-resume';

  fullNameLang = {
    uzbek: "Abduxoliq Maxamadaminov",
    english: "Abdukholiq Makhamadaminov",
    russian: "Абдухолик Махамадаминов"
  }

  sphereLang = {
    uzbek: "Full-Stack dasturchi",
    english: "Full-Stack developer",
    russian: "Full-Stack разработчик"
  }

  contactDetailsLang = {
    uzbek: "Aloqa uchun ma'lumotlar",
    english: "Contact details",
    russian: "Контактные данные"
  }

  educationLang = {
    uzbek: "Ta'lim",
    english: "Education",
    russian: "Образование"
  }

  chilanzarLang={
    uzbek: "Chilonzor",
    english: "Chilanzar",
    russian: "Чиланзар"
  }

  languagesLang = {
    uzbek: "Tillar",
    english: "Languages",
    russian: "Языки"
  }

  englishLang = {
    uzbek: "Ingliz tili",
    english: "English",
    russian: "Английский"
  }

  englishLevelLang = {
    uzbek: "Yuqori o'rta",
    english: "Upper-Intermediate",
    russian: "Высший средний"
  }

  russianLang = {
    uzbek: "Rus tili",
    english: "Russian",
    russian: "Русский"
  }

  russianLevelLang = {
    uzbek: "O'rta",
    english: "Intermediate",
    russian: "Средний"
  }

  summaryLang={
    uzbek: "Qisqacha bayon",
    english: "Summary",
    russian: "Краткое содержание"
  }

  summaryBodyLang={
    uzbek: "Zamonaviy veb-ilovalarni yaratish tajribasiga ega Full-Stack Developer. Kuchli back-end ishlab chiqish uchun ASP.NET Core va Entity Framework Core, dinamik va foydalanuvchilarga qulay interfeyslarni yaratish uchun Angular dasturlarini yaxshi bilaman.",
    english: "Full-Stack Developer with expertise in building modern web applications. Proficient in ASP.NET Core and Entity Framework Core for robust back-end development, and Angular for building dynamic and user-friendly interfaces.",
    russian: "Full-Stack Developer с опытом создания современных веб-приложений. Знание ASP.NET Core и Entity Framework Core для надежной разработки бэкенда, а также Angular для создания динамических и удобных интерфейсов." 
  }

  portfolioLang={
    uzbek: "Portfolio",
    english: "Portfolio",
    russian: "Портфолио"
  }

  lang!: string 
  langs: string[] = ["English","O'zbekcha", "Русский"]

  fullName!: string
  sphere!: string
  contactDetails!: string
  education!: string
  chilanzar!:string
  languages!: string
  english!: string
  englishLevel!: string
  russian!: string
  russianLevel!: string
  summary!:string
  summaryBody!:string
  portfolio!:string

  changeLang(lang: string) {

    this.langs = this.langs.filter(l => l !=lang)
    if(this.lang!=null){
      this.langs.push(this.lang)
    }

    this.lang=lang

    if (lang == "English") {
      this.fullName = this.fullNameLang.english
      this.sphere = this.sphereLang.english
      this.contactDetails = this.contactDetailsLang.english
      this.education = this.educationLang.english
      this.chilanzar=this.chilanzarLang.english
      this.languages = this.languagesLang.english
      this.english = this.englishLang.english
      this.englishLevel = this.englishLevelLang.english
      this.russian = this.russianLang.english
      this.russianLevel = this.russianLevelLang.english
      this.summary=this.summaryLang.english
      this.summaryBody=this.summaryBodyLang.english
      this.portfolio=this.portfolioLang.english;
    }
    else if (lang == "O'zbekcha") {
      this.fullName = this.fullNameLang.uzbek
      this.sphere = this.sphereLang.uzbek
      this.contactDetails = this.contactDetailsLang.uzbek
      this.education = this.educationLang.uzbek
      this.chilanzar=this.chilanzarLang.uzbek
      this.languages = this.languagesLang.uzbek
      this.english = this.englishLang.uzbek
      this.englishLevel = this.englishLevelLang.uzbek
      this.russian = this.russianLang.uzbek
      this.russianLevel = this.russianLevelLang.uzbek
      this.summary=this.summaryLang.uzbek
      this.summaryBody=this.summaryBodyLang.uzbek
      this.portfolio=this.portfolioLang.uzbek;
    }
    else if (lang == "Русский") {
      this.fullName = this.fullNameLang.russian
      this.sphere = this.sphereLang.russian
      this.contactDetails = this.contactDetailsLang.russian
      this.education = this.educationLang.russian
      this.chilanzar=this.chilanzarLang.russian
      this.languages = this.languagesLang.russian
      this.english = this.englishLang.russian
      this.englishLevel = this.englishLevelLang.russian
      this.russian = this.russianLang.russian
      this.russianLevel = this.russianLevelLang.russian
      this.summary=this.summaryLang.russian
      this.summaryBody=this.summaryBodyLang.russian
      this.portfolio=this.portfolioLang.russian; 
    }
  }
}
