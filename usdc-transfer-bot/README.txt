# USDC Transfer Bot

A notification system for tracking USDC transfers on Sepolia network. This project consists of a subgraph for monitoring USDC transfers and a frontend dashboard with push notifications.

## Features

- Real-time monitoring of USDC transfers to a specific address
- Push notifications for new transfers
- Interactive dashboard showing transfer history
- Transfer statistics and analytics
- Etherscan integration for transaction details

## Prerequisites

- Node.js >= 14
- yarn or npm
- Graph CLI (`npm install -g @graphprotocol/graph-cli`)
- Access to a Sepolia node (e.g., Infura)

## Setup

### Subgraph Setup

1. Install dependencies:
```bash
cd subgraph
yarn install
```

2. Update configuration:
   - Set your tracked address in `src/mapping.ts`
   - Update the USDC contract address in `subgraph.yaml` if needed

3. Deploy the subgraph:
```bash
graph codegen
graph build
graph deploy --node https://api.thegraph.com/deploy/ your-username/usdc-transfers
```

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
yarn install
```

2. Configure the application:
   - Update the Apollo Client endpoint in `src/lib/apollo-client.ts`
   - Set your tracked address in `src/lib/constants.ts`

3. Start the development server:
```bash
yarn dev
```

## Usage

1. Open the dashboard in your browser (default: http://localhost:5173)
2. Allow notifications when prompted
3. The dashboard will automatically update every minute
4. You'll receive notifications for new transfers

## Project Structure

```
📦 usdc-transfer-bot/
├── 📂 subgraph/          # The Graph Protocol subgraph
├── 📂 frontend/          # React frontend application
└── 📄 README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.