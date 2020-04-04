type SeparatedDate = {
  day: number
  month: number
  year: number
};

type DateAgo = {
  dayAgo: Date
  monthAgo: Date
  yearAgo: Date
  daysAgo?: undefined
  monthsAgo?: undefined
  yearsAgo?: undefined
};

type DatesAgo = {
  daysAgo: Date
  monthsAgo: Date
  yearsAgo: Date
  dayAgo?: undefined
  monthAgo?: undefined
  yearAgo?: undefined
};

const getSeparatedDate = (now: Date = new Date()): SeparatedDate => {
  const day: number = now.getDate();
  const month: number = now.getMonth();
  const year: number = now.getFullYear();

  return {
    day,
    month,
    year
  };
};

const today = (): Date => {
  const { day, month, year }: SeparatedDate = getSeparatedDate();

  return new Date(year, month, day);
};

const yesterday = (): Date => {
  const { day, month, year }: SeparatedDate = getSeparatedDate();

  return new Date(year, month, day - 1);
};

const beginningOfDay = (): Date => {
  const { day, month, year }: SeparatedDate = getSeparatedDate();

  return new Date(year, month, day);
};

const beginningOfMonth = (): Date => {
  const { month, year }: SeparatedDate = getSeparatedDate();

  return new Date(year, month, 1);
};

const beginningOfYear = (): Date => {
  const { year }: SeparatedDate = getSeparatedDate();

  return new Date(year, 0, 1);
};

const day = (date: Date): number => {
  const { day }: SeparatedDate = getSeparatedDate(date);

  return day;
};

const month = (date: Date): number => {
  const { month }: SeparatedDate = getSeparatedDate(date);

  return month;
};

const year = (date: Date): number => {
  const { year }: SeparatedDate = getSeparatedDate(date);

  return year;
};

const get = (n: number): DateAgo | DatesAgo => {
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
    return {
      daysAgo,
      monthsAgo,
      yearsAgo
    };
  };

  return {
    dayAgo,
    monthAgo,
    yearAgo
  }
};
