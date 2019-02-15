#include "lib_tab1.h"

int		ft_sum_tab(int *Tab, int size)
{
	int		tmp;
	int		count;

	count = 0;
	tmp = 0;
	while (count <= size)
	{
		tmp = tmp + Tab[count];
		count++;
	}
	return (tmp);
}
