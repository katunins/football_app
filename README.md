# Football Teams App

Это мобильное приложение на React Native для просмотра футбольных команд, их составов и будущих матчей с использованием публичного API [football-data.org](https://www.football-data.org/documentation/quickstart).

## Основные возможности

- Просмотр списка футбольных команд
- Детальная информация о команде: название, логотип, страна, стадион, тренер
- Состав команды (игроки)
- Список будущих матчей команды с указанием соперника, даты и соревнования
- Пагинация списка команд
- Поиск и переход к деталям команды

## Используемые технологии

- React Native
- Redux Toolkit (с Thunk для асинхронных запросов)
- Axios
- React Navigation
- TypeScript

## Быстрый старт

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Для iOS выполните:
   ```bash
   cd ios && pod install && cd ..
   ```
3. Запустите приложение:
   - Android: `npm run android`
   - iOS: `npm run ios`

## Структура проекта

- `screens/` — экраны приложения (список команд, детали команды и т.д.)
- `components/` — переиспользуемые компоненты (TeamListItem, MatchItem и др.)
- `services/` — сервисы для работы с API и типы данных
- `store/` — redux store, слайсы и селекторы

## API
Используется публичный API [football-data.org](https://www.football-data.org/documentation/quickstart) для получения информации о командах, игроках и матчах.

## Скриншоты
_(Добавьте сюда скриншоты приложения)_

---

**Разработчик:**
- [your name or github]
