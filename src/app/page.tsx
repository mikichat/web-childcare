
import React from 'react';
import { Sun, Smile, BookOpen, Shield, Users, Clock, MapPin, Phone, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans text-gray-800 selection:bg-[#FCD34D] selection:text-black">
      {/* Top Banner */}
      <div className="bg-[#F59E0B] text-white py-2 px-4 text-center text-sm font-bold tracking-wide">
        🚀 신규 원생 모집 중! 방문 상담 예약 시 발달 검사 무료 혜택
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FCD34D] rounded-full flex items-center justify-center text-white shadow-md transform hover:rotate-12 transition-transform">
                <Sun size={24} className="text-orange-600" fill="currentColor" />
              </div>
              <span className="text-2xl font-black text-gray-800 tracking-tight">
                해와달<span className="text-[#F59E0B]">발달센터</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-bold text-gray-500">
              <a href="#about" className="hover:text-[#F59E0B] transition-colors">센터 소개</a>
              <a href="#program" className="hover:text-[#F59E0B] transition-colors">발달 프로그램</a>
              <a href="#teachers" className="hover:text-[#F59E0B] transition-colors">선생님</a>
              <a href="#facility" className="hover:text-[#F59E0B] transition-colors">시설 안내</a>
            </div>
            <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
              상담 예약하기 <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#FEF3C7] rounded-bl-[200px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="inline-block bg-white border-2 border-[#FCD34D] text-orange-600 px-4 py-1.5 rounded-full text-sm font-black shadow-sm">
              🎈 아이들의 꿈이 자라는 공간
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              놀이로 배우고 <br/>
              <span className="text-[#F59E0B] relative inline-block">
                사랑으로
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#FCD34D] opacity-50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> 자랍니다
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              해와달 센터는 아이들의 고유한 잠재력을 발견합니다.<br/>
              신체, 정서, 인지 발달의 균형을 맞춘<br/>
              통합 발달 놀이 교육을 경험해보세요.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[#F59E0B] text-white rounded-2xl font-bold text-lg hover:bg-[#D97706] transition-all shadow-xl shadow-orange-200">
                무료 체험 수업 신청
              </button>
              <button className="px-8 py-4 bg-white border-2 border-orange-100 text-orange-600 rounded-2xl font-bold text-lg hover:bg-[#FFFBEB] transition-colors">
                교육과정 더보기
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FDE68A] rounded-full opacity-20 blur-3xl -z-10 animate-pulse"></div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop" className="w-full h-64 object-cover rounded-[2rem] shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500" alt="Kids Playing" />
              <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop" className="w-full h-64 object-cover rounded-[2rem] shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500 mt-12" alt="Kids Learning" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Icons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, title: "안전 인증 시설", desc: "친환경 소재 & CCTV 완비", color: "text-green-500", bg: "bg-green-50" },
              { icon: Users, title: "소수 정예 케어", desc: "교사 대 아동 비율 1:4", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: BookOpen, title: "맞춤형 커리큘럼", desc: "연령별 발달 단계 교육", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: Smile, title: "긍정 훈육", desc: "아이의 마음을 읽는 지도", color: "text-orange-500", bg: "bg-orange-50" },
            ].map((item, idx) => (
              <div key={idx} className="group p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} className={item.color} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="program" className="py-24 bg-[#FEF3C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">재미있는 발달 프로그램</h2>
            <p className="text-gray-600">놀이처럼 즐겁게 배우며 신체와 두뇌가 쑥쑥 자라납니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "감각 통합 놀이", desc: "오감을 자극하여 두뇌 발달을 촉진하는 신체 활동", tag: "Physical", color: "bg-[#FCA5A5]" },
              { title: "창의 아트 클래스", desc: "다양한 재료를 활용한 미술 활동으로 표현력 향상", tag: "Creative", color: "bg-[#93C5FD]" },
              { title: "사회성 그룹 코칭", desc: "또래 친구들과 어울리며 배우는 배려와 규칙", tag: "Social", color: "bg-[#86EFAC]" },
            ].map((prog, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`h-32 ${prog.color} relative p-6 flex flex-col justify-between`}>
                  <span className="bg-white/30 text-white px-3 py-1 rounded-full text-xs font-bold w-fit backdrop-blur-sm">{prog.tag}</span>
                  <div className="absolute right-4 bottom-4 opacity-50">
                    <Star size={48} className="text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{prog.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{prog.desc}</p>
                  <a href="#" className="inline-flex items-center font-bold text-[#F59E0B] hover:underline">
                    자세히 보기 <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities / CTA */}
      <section id="facility" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 bg-[#ECFDF5] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#34D399] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#10B981] rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
          
          <h2 className="text-3xl md:text-5xl font-black text-[#065F46] mb-6 relative z-10">
            우리 아이가 매일 오고 싶은 곳
          </h2>
          <p className="text-lg text-[#047857] mb-10 max-w-2xl mx-auto relative z-10">
            넓고 쾌적한 놀이 공간과 편안한 상담실이 준비되어 있습니다.<br/>
            언제든 편하게 방문하셔서 시설을 둘러보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3 text-left min-w-[200px]">
              <div className="bg-[#D1FAE5] p-2 rounded-lg text-[#059669]"><Phone size={20}/></div>
              <div>
                <p className="text-xs text-gray-500 font-bold">상담 문의</p>
                <p className="text-lg font-black text-[#059669]">02-1234-5678</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3 text-left min-w-[200px]">
              <div className="bg-[#D1FAE5] p-2 rounded-lg text-[#059669]"><Clock size={20}/></div>
              <div>
                <p className="text-xs text-gray-500 font-bold">운영 시간</p>
                <p className="text-lg font-black text-[#059669]">10:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFFBEB] border-t border-[#FDE68A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FCD34D] rounded-full flex items-center justify-center text-white">
                <Sun size={16} fill="currentColor" />
              </div>
              <span className="text-xl font-black text-gray-800">해와달발달센터</span>
            </div>
            <div className="flex gap-6 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-[#F59E0B]">개인정보처리방침</a>
              <a href="#" className="hover:text-[#F59E0B]">이용약관</a>
              <a href="#" className="hover:text-[#F59E0B]">오시는 길</a>
            </div>
          </div>
          <div className="mt-8 text-xs text-gray-400">
            <p>대표자: 김해달 | 사업자등록번호: 123-45-67890 | 주소: 서울특별시 마포구 월드컵로 123 2층</p>
            <p className="mt-2">Copyright © 2024 Haewadal Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
