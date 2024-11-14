import { FiUser } from "react-icons/fi";
import Section_Header from "../../components/section_header";
import About_img from "../../assets/About-image.png";

function About_AR() {
    return (
        <section id="about" className="section p-10 overflow-hidden flex flex-col gap-10" dir="rtl">
            <Section_Header title="عنّي" icon={FiUser} />
            <div className="flex flex-col-reverse lg:flex-row gap-10">
                
                {/* About Content */}
                <article className="flex flex-col gap-6 lg:w-[60%] text-right">
                    {/* About Headline */}
                    <header>
                        <h1 className="text-Header text-text">
                            محلل بيانات  و مطور واجهات أمامية <span className="text-primary">شغوف</span> |خبير ببناء تجارب مستخدم ورؤى قائمة على <span className="text-primary">البيانات</span>
                        </h1>
                    </header>
                    
                    {/* About Description */}
                    <p className="text-text-light text-description leading-relaxed">
                        محلل بيانات ذو خبرة قوية في تطوير البرمجيات، خاصة في تطوير تطبيقات الويب والجوال. أتمتع بمهارة تحويل البيانات المعقدة إلى رؤى واضحة وقابلة للتنفيذ باستخدام أساليب مثل تنظيف البيانات، تنظيمها، وتصورها. معروف بتقديم حلول مبتكرة تتمحور حول المستخدم وتتجاوز توقعات المستخدم.
                    </p>
                    
                    {/* Optional Key Values or Strengths */}
                    <ul className="list-disc pl-5 text-text-light text-description">
                        <li>نهج دقيق وتحليلي في كل مشروع</li>
                        <li>مهارة في <span className="text-primary">تنظيف البيانات</span>، <span className="text-primary">تصور البيانات</span>، و<span className="text-primary">تطوير الويب</span></li>
                        <li>شغف بالتعلم المستمر والنمو الشخصي</li>
                    </ul>
                </article>

                {/* About Image */}
                <div className="flex justify-center self-center lg:w-[40%]">
                    <img 
                        className="w-full object-cover rounded-2xl" 
                        src={About_img} 
                        alt="ص"
                    />
                </div>
            </div>
        </section>
    );
}

export default About_AR;
