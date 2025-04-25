import { cn } from '../utils';

describe('cn (className utility)', () => {
  it('combines class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles conditional classes', () => {
    const isActive = true;
    const isPrimary = false;
    expect(cn('base', isActive && 'active', isPrimary && 'primary')).toBe('base active');
  });

  it('handles array of classes', () => {
    expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3');
  });

  it('merges Tailwind classes correctly', () => {
    expect(cn('p-4 bg-blue-500', 'p-6')).toBe('bg-blue-500 p-6');
  });

  it('handles undefined and null values', () => {
    expect(cn('base', undefined, null, 'active')).toBe('base active');
  });

  it('handles object syntax', () => {
    expect(cn('base', { active: true, disabled: false })).toBe('base active');
  });

  it('handles complex Tailwind class merging', () => {
    expect(
      cn(
        'inline-flex items-center',
        'px-4 py-2',
        'bg-blue-600 hover:bg-blue-700',
        'px-6 bg-red-500'
      )
    ).toBe('inline-flex items-center py-2 hover:bg-blue-700 px-6 bg-red-500');
  });

  it('handles important modifier correctly', () => {
    // tailwind-merge preserves both classes when using !important
    expect(cn('!p-4', 'p-6')).toBe('!p-4 p-6');
  });

  it('merges responsive variants correctly', () => {
    expect(cn('p-2 md:p-4', 'p-4 md:p-8')).toBe('p-4 md:p-8');
  });

  it('handles arbitrary values correctly', () => {
    expect(cn('grid-cols-[1fr,auto]', 'grid-cols-3')).toBe('grid-cols-3');
  });
});
