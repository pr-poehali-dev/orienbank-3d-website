import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [depositAmount, setDepositAmount] = useState(100000);
  const [depositTerm, setDepositTerm] = useState(12);
  const [chatOpen, setChatOpen] = useState(false);

  const calculateLoan = () => {
    const rate = 0.15; // 15% годовых
    const monthlyRate = rate / 12;
    const payment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return Math.round(payment);
  };

  const calculateDeposit = () => {
    const rate = 0.08; // 8% годовых
    const profit = depositAmount * rate * (depositTerm / 12);
    return Math.round(profit);
  };

  const exchangeRates = [
    { currency: "USD", buy: 95.5, sell: 96.2 },
    { currency: "EUR", buy: 103.8, sell: 104.6 },
    { currency: "CNY", buy: 13.2, sell: 13.4 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                ОРИЁНБОНК
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#credits"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Кредиты
              </a>
              <a
                href="#deposits"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Депозиты
              </a>
              <a
                href="#banking"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Интернет-банкинг
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Войти в банк
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Банк будущего уже здесь
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Современные финансовые решения с 3D технологиями и персональным
              подходом к каждому клиенту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg"
              >
                <Icon name="CreditCard" size={20} className="mr-2" />
                Оформить карту
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать кредит
              </Button>
            </div>

            {/* 3D Card Display */}
            <div className="relative mx-auto max-w-md mb-12">
              <div className="perspective-1000 transform-gpu">
                <div className="relative transform hover:rotate-y-12 transition-transform duration-700 preserve-3d">
                  <img
                    src="/img/69579c14-5e70-4057-b69b-15e95b3f274f.jpg"
                    alt="3D Banking Card"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="CreditCard" size={24} className="text-white" />
                </div>
                <CardTitle className="text-blue-800">Кредитные карты</CardTitle>
                <CardDescription>До 1 000 000 ₽ без справок</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Мгновенное одобрение, кэшбэк до 5%, без комиссий
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Подать заявку
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="PiggyBank" size={24} className="text-white" />
                </div>
                <CardTitle className="text-green-800">Депозиты</CardTitle>
                <CardDescription>До 12% годовых</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Надёжные вклады с высокой доходностью и гибкими условиями
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Открыть вклад
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Smartphone" size={24} className="text-white" />
                </div>
                <CardTitle className="text-purple-800">
                  Мобильный банк
                </CardTitle>
                <CardDescription>Банк в кармане 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Управляйте финансами через современное приложение
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Скачать приложение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section id="credits" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Калькуляторы
          </h3>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="loan" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="loan" className="text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Кредит
                </TabsTrigger>
                <TabsTrigger value="deposit" className="text-lg">
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Депозит
                </TabsTrigger>
              </TabsList>

              <TabsContent value="loan">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-blue-800">
                      Кредитный калькулятор
                    </CardTitle>
                    <CardDescription>
                      Рассчитайте ежемесячный платёж
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Сумма кредита: {loanAmount.toLocaleString()} ₽
                      </label>
                      <Input
                        type="range"
                        min="50000"
                        max="5000000"
                        step="50000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Срок: {loanTerm} месяцев
                      </label>
                      <Input
                        type="range"
                        min="6"
                        max="60"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-blue-200">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">
                          Ежемесячный платёж
                        </p>
                        <p className="text-3xl font-bold text-blue-600">
                          {calculateLoan().toLocaleString()} ₽
                        </p>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-3">
                      Подать заявку на кредит
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="deposit">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-green-800">
                      Депозитный калькулятор
                    </CardTitle>
                    <CardDescription>
                      Рассчитайте доходность вклада
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Сумма вклада: {depositAmount.toLocaleString()} ₽
                      </label>
                      <Input
                        type="range"
                        min="10000"
                        max="10000000"
                        step="10000"
                        value={depositAmount}
                        onChange={(e) =>
                          setDepositAmount(Number(e.target.value))
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Срок: {depositTerm} месяцев
                      </label>
                      <Input
                        type="range"
                        min="3"
                        max="36"
                        value={depositTerm}
                        onChange={(e) => setDepositTerm(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-green-200">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">
                          Доход за период
                        </p>
                        <p className="text-3xl font-bold text-green-600">
                          {calculateDeposit().toLocaleString()} ₽
                        </p>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg py-3">
                      Открыть депозит
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Exchange Rates & News */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Exchange Rates */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="TrendingUp"
                    size={24}
                    className="mr-2 text-blue-600"
                  />
                  Курсы валют
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exchangeRates.map((rate) => (
                    <div
                      key={rate.currency}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="font-medium">{rate.currency}/RUB</div>
                      <div className="flex space-x-4 text-sm">
                        <span className="text-green-600">
                          Покупка: {rate.buy}
                        </span>
                        <span className="text-red-600">
                          Продажа: {rate.sell}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* News */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Newspaper"
                    size={24}
                    className="mr-2 text-green-600"
                  />
                  Новости банка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium mb-1">
                      Новые тарифы по кредитам
                    </h4>
                    <p className="text-sm text-gray-600">
                      Снижены процентные ставки до 12% годовых
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      Сегодня
                    </Badge>
                  </div>
                  <Separator />
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-medium mb-1">
                      Обновление мобильного приложения
                    </h4>
                    <p className="text-sm text-gray-600">
                      Новый дизайн и улучшенная безопасность
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      Вчера
                    </Badge>
                  </div>
                  <Separator />
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-medium mb-1">Акция "Летний депозит"</h4>
                    <p className="text-sm text-gray-600">
                      Повышенная ставка 15% на 6 месяцев
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      2 дня назад
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internet Banking */}
      <section id="banking" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Интернет-банкинг
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smartphone" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Мобильное приложение
                </h4>
                <p className="text-gray-600">Все операции в одном приложении</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Monitor" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Веб-банк</h4>
                <p className="text-gray-600">Полный доступ через браузер</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Безопасность</h4>
                <p className="text-gray-600">Многоуровневая защита данных</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">ОРИЁНБОНК</h3>
              </div>
              <p className="text-gray-400">
                Современный банк для современных людей
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Кредиты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Депозиты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Переводы
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    8-800-555-0199
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    support@orienbank.ru
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Онлайн-чат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Адреса</h4>
              <p className="text-gray-400 mb-2">Москва, ул. Финансовая, 15</p>
              <p className="text-gray-400 mb-4">Режим: Пн-Пт 9:00-18:00</p>
              <div className="flex space-x-4">
                <Icon name="Phone" size={20} className="text-blue-400" />
                <Icon name="Mail" size={20} className="text-green-400" />
                <Icon name="MapPin" size={20} className="text-purple-400" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 ОРИЁНБОНК. Все права защищены. Лицензия ЦБ РФ №1234
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Консультант Анна</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setChatOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm">
                  Здравствуйте! Я Анна, ваш персональный консультант. Как могу
                  помочь?
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="text-xs">
                  Кредит
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Депозит
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Карта
                </Button>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input placeholder="Введите сообщение..." className="text-sm" />
              <Button size="sm">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <Button
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg z-40"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <Icon name="MessageCircle" size={24} />
      </Button>
    </div>
  );
};

export default Index;
