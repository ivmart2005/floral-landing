export const metrikaClick = (goalName: string) => {
  const counterId = 107260221;
  if (typeof window !== 'undefined' && (window as any).ym)
    {
        (window as any).ym(counterId, 'reachGoal', goalName);
    }
    else
    {
        console.warn("Метрика не работает");
    }
};