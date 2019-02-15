#include "lib_tp1.h"
//void	ft_putstr(char *str);

int		ft_check_same_nbr(int nb1, int nb2)
{
	if (nb1 == nb2)
		return (0);
	else if (nb1 < nb2)
        return (-1);
	return (1);
}
