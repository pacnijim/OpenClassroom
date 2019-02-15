#include "plus_ou_moins.h"
//#include <stdio.h>
//void  ft_putstr(char *str);
//void  ft_putnbr(int n);
//int   ft_check_same_nbr(int nb1, int nb2);
//void  ft_winner_is(int score_1, int score_2);

void    ft_PoM_1vs1(int nbr_secret)
{
    int     bouton_1;
    int     bouton_2;
    int     nbr_player_one;
    int     nbr_player_two;

    bouton_1 = -1;
    bouton_2 = -1;
    nbr_player_one = -1;
    nbr_player_two = -1;
    while(bouton_1 != 0 && bouton_2 != 0)
    {
        if (bouton_1 == 1)
        {
            ft_putstr("Try again player one. ;p\n");
            scanf("%d", &nbr_player_one);
            bouton_1 = ft_check_same_nbr(nbr_player_one, nbr_secret);
        }
        else if (bouton_1 == -1)
        {
            ft_putstr("Go player one good luck.\n");
            scanf("%d", &nbr_player_one);
            bouton_1 = ft_check_same_nbr(nbr_player_one, nbr_secret);
        }
        if (bouton_2 == 1)
        {
            ft_putstr("Try again player two. ;p\n");
            scanf("%d", &nbr_player_two);
            bouton_2 = ft_check_same_nbr(nbr_player_two, nbr_secret);
        }
        else if (bouton_2 == -1)
        {
            ft_putstr("Your turn player two.\n");
            scanf("%d", &nbr_player_two);
            bouton_2 = ft_check_same_nbr(nbr_player_two, nbr_secret);
        }
    }
    ft_winner_is(bouton_1, bouton_2);
}

