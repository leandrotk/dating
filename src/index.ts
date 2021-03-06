export type SeparatedDate = {
  day: number
  month: number
  year: number
};

export type DateAgo = {
  dayAgo: Date
  monthAgo: Date
  yearAgo: Date
  daysAgo?: never
  monthsAgo?: never
  yearsAgo?: never
};

export type DatesAgo = {
  daysAgo: Date
  monthsAgo: Date
  yearsAgo: Date
  dayAgo?: never
  monthAgo?: never
  yearAgo?: never
};

export const getSeparatedDate = (now: Date = new Date()): SeparatedDate => {
  const day: number = now.getDate();
  const month: number = now.getMonth();
  const year: number = now.getFullYear();

  return { day, month, year };
};

export const today = (): Date => {
  const { day, month, year }: SeparatedDate = getSeparatedDate();

  return new Date(year, month, day);
};

export const yesterday = (): Date => {
  const { day, month, year }: SeparatedDate = getSeparatedDate();

  return new Date(year, month, day - 1);
};

export const beginningOfDay = (date: Date = new Date()): Date => {
  const { day, month, year }: SeparatedDate = getSeparatedDate(date);

  return new Date(year, month, day);
};

export const beginningOfMonth = (date: Date = new Date()): Date => {
  const { month, year }: SeparatedDate = getSeparatedDate(date);

  return new Date(year, month, 1);
};

export const beginningOfYear = (date: Date = new Date()): Date => {
  const { year }: SeparatedDate = getSeparatedDate(date);

  return new Date(year, 0, 1);
};

export const day = (date: Date): number => date.getDate();

export const month = (date: Date): number => date.getMonth();

export const year = (date: Date): number => date.getFullYear();

export const get = (n: number): DateAgo | DatesAgo => {
  if (n < 1) {
    throw new Error('Number should be greater or equal than 1');
  }

  const { day, month, year }: SeparatedDate = getSeparatedDate();

  const dayAgo: Date = new Date(year, month, day - n);
  const monthAgo: Date = new Date(year, month - n, day);
  const yearAgo: Date = new Date(year - n, month, day);

  const daysAgo: Date = new Date(year, month, day - n);
  const monthsAgo: Date = new Date(year, month - n, day);
  const yearsAgo: Date = new Date(year - n, month, day);

  if (n > 1) {
    return { daysAgo, monthsAgo, yearsAgo };
  };

  return { dayAgo, monthAgo, yearAgo }
};
