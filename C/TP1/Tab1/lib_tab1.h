#ifndef LIB_TAB1_H
# define LIB_TAB1_H

#include <stdio.h>
#include <unistd.h>
#define RC write(1, "\n", 1);

int		*ft_create_tab(int	size);
void	ft_putstr(char *str);
void	ft_display_tab(int *T, int size);
void	ft_putnbr(int n);
void	ft_putchar(char c);
int		ft_sum_tab(int *Tab, int size);
int		ft_average_tab(int *Tab, int size);

#endif