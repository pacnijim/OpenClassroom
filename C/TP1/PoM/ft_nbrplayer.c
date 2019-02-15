#include "plus_ou_moins.h"
//#include <stdio.h>

int     ft_nbrplayer(void)
{
    int     nb_player;

    ft_putstr("Choose mode:\n1- One Player\n2- 1VS1\n");
    scanf("%d", &nb_player);
    return (nb_player);
}
