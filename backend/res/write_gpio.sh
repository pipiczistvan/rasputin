#!/bin/bash
#
# Usage of the script is:
# ./write_gpio.sh <GPIO_number> <value>

####################
# INPUT VALIDATION #
####################

# Checking number of arguments
if [ "$#" -ne 2 ]; then
 echo "Invalid number of arguments (expected is 2, got $#)!"
 exit 1
fi
# Checking GPIO number
gpios=(0 1 4 7 8 9 10 11 14 15 17 18 21 22 23 24 25)
if [[ ! " ${gpios[@]} " =~ " $1 " ]]; then
 echo "Invalid GPIO number ($1)!"
 echo "Please choose from the following numbers:"
 for number in ${gpios[@]}
 do
  echo -ne "$number "
 done
 echo
 exit 1
fi

#####################
# WRITING TO OUTPUT #
#####################

# Set up GPIO and set to ouput
gpio_dir="/sys/class/gpio"

if [ ! -d "${gpio_dir}/gpio$1" ]; then
 echo "$1" > "${gpio_dir}/export"
 sleep 1; # Wait for directory setup
 echo "Exported gpio$1."
fi
echo "out" > "${gpio_dir}/gpio$1/direction"

# Write value to output
echo "$2" > "${gpio_dir}/gpio$1/value"

echo "Value ($2) is written to gpio$1 output!"