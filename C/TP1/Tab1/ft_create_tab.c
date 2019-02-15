#include "lib_tab1.h"
#include <stdlib.h>
void	ft_putstr(char *str);

int		*ft_create_tab(int size)
{
	int		*T;
	int		count;

	count = 0;
	T = (int *)malloc(sizeof(int) * size);
	while (count++ < size)
		T[count] = 0;
	return (T);
}
