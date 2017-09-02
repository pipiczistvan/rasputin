#!/bin/bash
cpu=$(</sys/class/thermal/thermal_zone0/temp)
echo -n "$((cpu/1000))"