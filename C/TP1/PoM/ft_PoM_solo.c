#include "plus_ou_moins.h"
//#include <stdio.h>
//void  ft_putstr(char *str);
//void  ft_putnbr(int n);
//int       ft_check_same_nbr(int nb1, int nb2);

void        ft_PoM_solo(int nbr_secret)
{
    int     your_nbr;
    int     count;
    int     check;

    your_nbr = -1;
    count = 0;
    check = -1;
    while (your_nbr != nbr_secret)
	{
	    if (check == 1)
            ft_putstr("Try again.  :)\n");
        else
            ft_putstr("Start choose a number\n");
		scanf("%d", &your_nbr);
		count += 1;
		check = ft_check_same_nbr(your_nbr, nbr_secret);
	}
	ft_putstr("Congratulation!!!!!\n");
	ft_putnbr(count);
	ft_putstr(" essay, you can better.\n");
}
