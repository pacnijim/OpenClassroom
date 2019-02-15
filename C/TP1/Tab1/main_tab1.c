#include "lib_tab1.h"

int main(void)
{
	int		*tab;
	int		size;
	int		tmp;

	ft_putstr("How many case you want?\n");
	scanf("%d", &size);
	tab = ft_create_tab(size);
	ft_fill_tab(tab, size);
	RC;
	ft_display_tab(tab, size);
	RC;
	ft_putstr("la somme des cases est de : ");
	tmp = ft_sum_tab(tab, size);
	ft_putnbr(tmp);
	RC;
	ft_putstr("La moyenne est de : ");
	tmp = ft_average_tab(tab, size);
	ft_putnbr(tmp);
	RC;
	return 0;
}