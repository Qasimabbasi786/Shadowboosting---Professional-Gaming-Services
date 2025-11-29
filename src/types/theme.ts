export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  cardBg: string;
  text: string;
  textSecondary: string;
}

export const themes: Record<string, Theme> = {
  'electric-blue': {
    name: 'Electric Blue',
    primary: '#00D2FF',
    secondary: '#3A7BD5',
    accent: '#FF6B6B',
    background: '#0B0F2A',
    cardBg: '#1B203D',
    text: '#FFFFFF',
    textSecondary: '#B0B6D4'
  },
  'neon-green': {
    name: 'Neon Green',
    primary: '#39FF14',
    secondary: '#00FF88',
    accent: '#FF4081',
    background: '#0E1C0E',
    cardBg: '#1B2F1B',
    text: '#FFFFFF',
    textSecondary: '#B5D6B5'
  },
  'cyber-purple': {
    name: 'Cyber Purple',
    primary: '#A855F7',
    secondary: '#EC4899',
    accent: '#06B6D4',
    background: '#1B0C2F',
    cardBg: '#2E1C4F',
    text: '#FFFFFF',
    textSecondary: '#C4B5FD'
  },
  'gaming-red': {
    name: 'Gaming Red',
    primary: '#FF073A',
    secondary: '#DC2626',
    accent: '#FBBF24',
    background: '#200B0B',
    cardBg: '#401B1B',
    text: '#FFFFFF',
    textSecondary: '#FCA5A5'
  },
  'gold': {
    name: 'Gold',
    primary: '#FFD700',
    secondary: '#FFA500',
    accent: '#FF6347',
    background: '#201C0B',
    cardBg: '#403B1B',
    text: '#FFFFFF',
    textSecondary: '#FEF3C7'
  },
  'pink-magenta': {
    name: 'Pink Magenta',
    primary: '#FF1493',
    secondary: '#DA70D6',
    accent: '#00CED1',
    background: '#2E0B2E',
    cardBg: '#4B1B4B',
    text: '#FFFFFF',
    textSecondary: '#F9A8D4'
  },
  'orange-amber': {
    name: 'Orange Amber',
    primary: '#FF8C00',
    secondary: '#FF4500',
    accent: '#32CD32',
    background: '#2E1B0B',
    cardBg: '#4B2B1B',
    text: '#FFFFFF',
    textSecondary: '#FED7AA'
  }
};