#include "plus_ou_moins.h"
/*#include <unistd.h>
#include <stdio.h>
#include <time.h>

#define MAX_1 10
#define MAX_2 100
#define MAX_3 1000
#define MIN 1
#define RC write(1, "\n", 1);

void	ft_putchar(char c);
void	ft_putstr(char *str);
void	ft_putnbr(int	n);
int     ft_level(void);
int     ft_nbrplayer(void);
void    ft_PoM_solo(int nbr_secret);
void    ft_PoM_1vs1(int nbr_secret);
int		ft_check_same_nbr(int nb1, int nb2);
void    ft_winner_is(int score_1, int score_2);
*/
int		main(void)
{
	int		nbr_player;
	int     nbr_secret;
    int     level;

    level = ft_level();
	srand(time(NULL));
	if (level == 1)
        nbr_secret = (rand() % (MAX_1 - MIN + 1)) + MIN;
    else if (level == 2)
        nbr_secret = (rand() % (MAX_2 - MIN + 1)) + MIN;
    else if (level == 3)
        nbr_secret = (rand() % (MAX_3 - MIN + 1)) + MIN;
    else
        ft_putstr("error!!!");
	nbr_player = ft_nbrplayer();
	if (nbr_player == 1)
		ft_PoM_solo(nbr_secret);
	else if (nbr_player == 2)
		ft_PoM_1vs1(nbr_secret);
	else
		ft_putstr("error!!!");
    ft_putstr("Thanks for playing, and see you soon.\n");
	return (0);
}
