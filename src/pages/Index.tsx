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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Procly</span>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((menu, index) => (
                <div 
                  key={index}
                  className="relative nav-item"
                  onMouseEnter={() => handleDropdownToggle(menu.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                    <span className="font-medium">{menu.title}</span>
                    {menu.items.length > 0 && (
                      <Icon name="ChevronDown" size={16} className={`transition-transform ${
                        activeDropdown === menu.title ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                  
                  {menu.items.length > 0 && (
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 p-2 nav-dropdown ${
                      activeDropdown === menu.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'
                    }`}>
                      {menu.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
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
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-primary">
                Войти
              </Button>
              <Button className="btn-primary text-white px-6 py-2 rounded-lg font-medium">
                Попробовать бесплатно
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Автоматизируйте <span className="gradient-text">рутину</span>.
                  <br />
                  Сосредоточьтесь на <span className="gradient-text">важном</span>!
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Procly - это платформа для создания автоматизаций между сервисами без программирования. 
                  Экономьте сотни часов ежемесячно.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary text-white px-8 py-4 text-lg font-semibold rounded-xl">
                  <Icon name="Play" size={20} className="mr-2" />
                  Попробовать бесплатно
                </Button>
                <Button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Посмотреть демо
                </Button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6 pt-8">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span>Без программирования</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span>500+ интеграций</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span>Готовые шаблоны</span>
                </div>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative">
              <div className="video-frame w-full max-w-md mx-auto cursor-pointer group" 
                   onClick={() => alert('Открытие видео демо')}>
                {/* Video Background */}
                <img 
                  src="/img/600fdf52-a2e1-4d12-8cf8-4296874865ca.jpg"
                  alt="Демо видео"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={24} className="text-primary ml-1" />
                  </div>
                </div>

                {/* Video Duration */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  2:34
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Мощная автоматизация в <span className="gradient-text">несколько кликов</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Подключайте любые сервисы, создавайте сложные workflow и автоматизируйте бизнес-процессы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Workflow',
                title: 'Визуальный редактор',
                description: 'Создавайте автоматизации простым перетаскиванием блоков'
              },
              {
                icon: 'Brain',
                title: 'ИИ-помощник',
                description: 'Умный анализ данных и предложения по оптимизации'
              },
              {
                icon: 'Zap',
                title: 'Мгновенное выполнение',
                description: 'Быстрая обработка данных и моментальные уведомления'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mx-auto">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Example */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Пример <span className="gradient-text">интеграции</span>
            </h2>
            <p className="text-lg text-gray-600">
              Автоматическая обработка писем от клиентов
            </p>
          </div>

          {/* Workflow Visualization */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
              {/* Step 1 - Trigger */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Яндекс почта</h3>
                  <p className="text-sm text-gray-500">триггер</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <Icon name="ArrowRight" size={32} className="text-gray-400" />
              </div>
              <div className="md:hidden">
                <Icon name="ArrowDown" size={32} className="text-gray-400" />
              </div>

              {/* Step 2 - Action */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="Table" size={32} className="text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Добавить в таблицу</h3>
                  <p className="text-sm text-gray-500">действие</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <Icon name="ArrowRight" size={32} className="text-gray-400" />
              </div>
              <div className="md:hidden">
                <Icon name="ArrowDown" size={32} className="text-gray-400" />
              </div>

              {/* Step 3 - Action */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="Send" size={32} className="text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Уведомить в телеграм</h3>
                  <p className="text-sm text-gray-500">действие</p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Автоматизация активна</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold gradient-text">500+</div>
              <p className="text-gray-600">сервисов с интеграцией</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold gradient-text">1М+</div>
              <p className="text-gray-600">выполненных автоматизаций</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold gradient-text">50+</div>
              <p className="text-gray-600">готовых шаблонов для любого бизнеса</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Procly */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Почему выбирают <span className="gradient-text">Procly</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Icon name="Shield" size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Безопасность</h3>
              <p className="text-gray-600">В реестре российского ПО</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Icon name="MousePointer" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Удобство</h3>
              <p className="text-gray-600">Визуальный редактор</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                <Icon name="Headphones" size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Поддержка</h3>
              <p className="text-gray-600">Поможем создать любую автоматизацию</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Интеграции с <span className="gradient-text">любыми сервисами</span>
            </h2>
            <p className="text-lg text-gray-600">
              Подключайте популярные российские и зарубежные решения
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'Яндекс', icon: 'Search' },
              { name: 'Кайтен', icon: 'Kanban' },
              { name: 'ГигаЧат', icon: 'MessageCircle' },
              { name: 'ChatGPT', icon: 'Bot' },
              { name: 'Телеграм', icon: 'Send' },
              { name: 'ВКонтакте', icon: 'Users' },
              { name: 'Битрикс24', icon: 'Building' },
              { name: 'amoCRM', icon: 'Database' },
              { name: 'МойСклад', icon: 'Package' },
              { name: 'Почта России', icon: 'Mail' },
              { name: 'Сбер', icon: 'CreditCard' },
              { name: 'Тинькофф', icon: 'Wallet' }
            ].map((service, index) => (
              <div key={index} className="text-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                  <Icon name={service.icon} size={20} className="text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Примеры <span className="gradient-text">автоматизаций</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Обработка заявок',
                description: 'Автоматический перенос заявок из форм в CRM',
                icon: 'FileText'
              },
              {
                title: 'Учёт продаж',
                description: 'Синхронизация данных между кассой и учётной системой',
                icon: 'TrendingUp'
              },
              {
                title: 'Email-маркетинг',
                description: 'Рассылка персонализированных писем по триггерам',
                icon: 'Mail'
              },
              {
                title: 'Управление складом',
                description: 'Уведомления при низком остатке товаров',
                icon: 'Package'
              }
            ].map((example, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                  <Icon name={example.icon} size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{example.title}</h3>
                <p className="text-sm text-gray-600">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Оставь контакты, мы поможем автоматизировать твой бизнес и разберём его на процессы!
            </h2>
            <p className="text-xl opacity-90">
              Получи персональную консультацию и план автоматизации под твои задачи
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <Button className="bg-white text-primary px-8 py-3 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">Procly</span>
              </div>
              <p className="text-gray-400">
                Платформа для автоматизации бизнес-процессов без программирования
              </p>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Продукт</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-white transition-colors">Обзор продукта</a>
                <a href="#" className="block hover:text-white transition-colors">Шаблоны</a>
                <a href="#" className="block hover:text-white transition-colors">ИИ-функции</a>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Ресурсы</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-white transition-colors">Блог</a>
                <a href="#" className="block hover:text-white transition-colors">Кейсы</a>
                <a href="#" className="block hover:text-white transition-colors">База знаний</a>
                <a href="#" className="block hover:text-white transition-colors">Сообщество</a>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Поддержка</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-white transition-colors">Помощь</a>
                <a href="#" className="block hover:text-white transition-colors">Контакты</a>
                <a href="#" className="block hover:text-white transition-colors">API</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Procly. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index