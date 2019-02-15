#ifndef PLUS_OU_MOINS_H
#define PLUS_OU_MOINS_H

#include <unistd.h>
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

#endif