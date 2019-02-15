#include "lib_tab1.h"
int		ft_sum_tab(int *Tab, int size);

int		ft_average_tab(int *Tab, int size)
{
	int		tmp;

	tmp = 0;
	tmp = ft_sum_tab(Tab, size);
	return (tmp / size);
}
