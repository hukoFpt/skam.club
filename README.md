# Skam.Club

This is a [Next.js](https://nextjs.org) project for **Skam.Club**, a platform for CS:GO case openings and cool skins. The project is built with modern web technologies and optimized for performance and scalability.

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/skam.club.git
   cd skam.club
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## To-Do List

### 0. **Layout**
- [ ] Homepage.
- [ ] Skin Wiki.
- [ ] Inventory.
- [ ] Add fund.
- [ ] Case opening.
- [ ] Profile.
- [ ] Upgrade.
- [ ] Exchange.
- [ ] Battle.

### 1. **Account**
- [ ] User authentication (login, signup, logout).
- [ ] Password reset functionality.
- [ ] User profile page (history, level, statistics).
- [ ] Multi-language support for account-related pages.
- [ ] Display user balances (money and weapon).

---

### 2. **Inventory**
- [ ] Display user's inventory (list of items/skins).
- [ ] Filter and sort items by rarity, type, or value.
- [ ] Allow users to sell items back for balance.

---

### 3. **Case Opening**
- [ ] Display available cases with prices and potential rewards.
- [ ] Implement case-opening animation.
- [ ] Deduct balance when a case is opened.
- [ ] Add the opened item to the user's inventory.
- [ ] Show recent case-opening history (global and user-specific).

---

### 4. **Upgrade**
- [ ] Allow users to select items from their inventory for upgrades.
- [ ] Implement upgrade mechanics (e.g., percentage-based success rate).
- [ ] Deduct the selected item(s) from the inventory on success or failure.
- [ ] Add the upgraded item to the inventory on success.
- [ ] Display upgrade history (global and user-specific).

---

### 5. **Battle**
- [ ] Create a battle lobby where users can join or create battles.
- [ ] Allow users to select cases for the battle.
- [ ] Implement real-time battle mechanics (e.g., WebSocket for live updates).
- [ ] Display battle results and distribute rewards.
- [ ] Add a battle history page (global and user-specific).

---

### 6. **Exchange**
- [ ] Allow users to exchange items.

---

### 7. **Tracking**
- [ ] Track all user actions (case openings, upgrades, battles, exchanges).
- [ ] Display a detailed activity log in the user's profile.
- [ ] Add filters for tracking specific actions (e.g., case openings only).
- [ ] Implement admin tools for tracking global activity.
- [ ] Ensure tracking data is stored securely and complies with privacy policies.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🎉