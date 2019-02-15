#include "lib_tab1.h"
#include <stdio.h>
void	ft_putnbr(int n);
void	ft_putstr(char *str);

void	ft_fill_tab(int *T, int size)
{
	int		count;
	int		tmp;

	count = 0;
	tmp = 0;
	ft_putstr("fill the ");
	ft_putnbr(size);
	ft_putstr(" cases!\n");
	while (count++ < size)
	{
		ft_putstr("case number ");
		ft_putnbr(count);
		ft_putstr(" : ");
		scanf("%d", &T[count]);
	}
}