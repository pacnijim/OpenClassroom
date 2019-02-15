#include "lib_tab1.h"
#include <unistd.h>

void	ft_putnbr(int nb);

void	ft_display_tab(int *T, int size)
{
	int		count;

	count = 0;
	write(1, "|", 1);
	while (count++ < size)
	{
		ft_putnbr(T[count]);
		write(1, "|", 1);
	}
}