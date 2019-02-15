#include "plus_ou_moins.h"
//void  ft_putstr(char *str);

void    ft_winner_is(int score_1, int score_2)
{
    if (score_1 == score_2)
        ft_putstr("Draw, anyone win, your are twice loser. ;p\n");
    else if (score_1 < score_2)
        ft_putstr("Congratulation player one, you win.\nPlayer two you are a LOSER\n");
    else
        ft_putstr("Player two win 'bravo'.\nPlayer one you can cry ----> LOSER\n");
}
