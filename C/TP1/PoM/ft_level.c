#include "plus_ou_moins.h"
//#include <stdio.h>

int     ft_level(void)
{
    int     lv;

    ft_putstr("Choose your level.\n1- Entre 1 et 10\n2- Entre 1 et 100\n3- Entre 1 et 1000\n");
    scanf("%d", &lv);
    return (lv);
}

