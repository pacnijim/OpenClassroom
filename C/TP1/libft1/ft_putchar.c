#include "lib_tp1.h"
//#include <unistd.h>

void    ft_putchar(char c)
{
    write(1, &c, 1);
}
