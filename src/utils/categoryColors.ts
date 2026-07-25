// Category color utilities for pharmaceutical products
import { branding } from '../config/branding';

export type CategoryName = keyof typeof branding.categoryColors;

export const categoryColorMap: Record<string, CategoryName> = {
  'orthopedics': 'orthopedics',
  'bone': 'orthopedics',
  'joint': 'orthopedics',
  'liver-care': 'liverCare',
  'liver': 'liverCare',
  'hepatic': 'liverCare',
  'gynecology': 'gynecology',
  'women': 'gynecology',
  'fertility': 'gynecology',
  'hematinics': 'hematinics',
  'iron': 'hematinics',
  'blood': 'hematinics',
  'respiratory': 'respiratory',
  'lungs': 'respiratory',
  'breathing': 'respiratory',
  'neurology': 'neurology',
  'brain': 'neurology',
  'nerve': 'neurology',
  'gastroenterology': 'gastroenterology',
  'digestive': 'gastroenterology',
  'stomach': 'gastroenterology',
  'antibiotics': 'antibiotics',
  'infection': 'antibiotics',
  'bacterial': 'antibiotics',
  'nutrition': 'nutrition',
  'nutritional': 'nutrition',
  'nutraceutical': 'nutrition',
  'wellness': 'nutrition',
};

export function getCategoryColor(tag: string): { primary: string; secondary: string } {
  const normalizedTag = tag.toLowerCase().replace(/[_\s]/g, '-');
  const categoryName = categoryColorMap[normalizedTag] || 'nutrition';
  return branding.categoryColors[categoryName];
}

export function getCategoryPrimaryColor(tag: string): string {
  return getCategoryColor(tag).primary;
}

export function getCategorySecondaryColor(tag: string): string {
  return getCategoryColor(tag).secondary;
}
