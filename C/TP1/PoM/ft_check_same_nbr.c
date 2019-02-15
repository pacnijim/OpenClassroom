#include "plus_ou_moins.h"
//void	ft_putstr(char *str);

int		ft_check_same_nbr(int nb1, int nb2)
{
	if (nb1 == nb2)
		return (0);
	else if (nb1 < nb2)
    {
        ft_putstr("To small\n Like your ... Penis ;p\n");
        return (1);
    }
    ft_putstr("To big. Like my ... intellidence :p\n");
	return (1);
}
