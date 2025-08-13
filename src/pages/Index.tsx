import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const menuItems = [
    {
      title: 'Продукт',
      items: ['Обзор продукта', 'Шаблон', 'ИИ']
    },
    {
      title: 'Варианты использования',
      items: ['Создание ИИ агентов', 'ИТ процессы', 'Встроенная автоматизация', 'Усиление своей CRM']
    },
    {
      title: 'Ресурсы',
      items: ['Блог', 'Кейсы', 'База знаний', 'Сообщество', 'Вебинары']
    },
    {
      title: 'Цены',
      items: []
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Procly</span>
            </div>

            {/* Menu Items */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((menu, index) => (
                <div 
                  key={index}
                  className="relative group"
                  onMouseEnter={() => menu.items.length > 0 && handleDropdownToggle(menu.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2">
                    <span>{menu.title}</span>
                    {menu.items.length > 0 && (
                      <Icon name="ChevronDown" size={16} className={`transition-transform duration-200 ${
                        activeDropdown === menu.title ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                  
                  {menu.items.length > 0 && (
                    <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ${
                      activeDropdown === menu.title 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 translate-y-2 invisible'
                    }`}>
                      {menu.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm">
                Попробовать бесплатно
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Автоматизируйте <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">рутину</span>.
                  <br />
                  Сосредоточьтесь на <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">важном</span>!
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Procly - это платформа для создания автоматизаций между сервисами без программирования. 
                  Экономьте сотни часов ежемесячно.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  <Icon name="Play" size={20} className="mr-2" />
                  Попробовать бесплатно
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 hover:border-purple-300 hover:bg-purple-50 text-gray-700 hover:text-purple-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Посмотреть демо
                </Button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-medium">Без программирования</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-medium">500+ интеграций</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-medium">Готовые шаблоны</span>
                </div>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group cursor-pointer" 
                   onClick={() => alert('Открытие видео демо')}>
                {/* Video Frame 9:16 */}
                <div className="w-80 h-[540px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-2xl overflow-hidden relative">
                  {/* Video Background */}
                  <img 
                    src="/img/077ebb41-e549-4c6b-9258-3dfd1f17f3dc.jpg"
                    alt="Привлекательный молодой человек"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                    <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon name="Play" size={32} className="text-purple-600 ml-1" />
                    </div>
                  </div>

                  {/* Video Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    3:45
                  </div>
                  
                  {/* Video Title Overlay */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">Демо Procly</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        </div>
      </section>


    </div>
  )
}

export default Index