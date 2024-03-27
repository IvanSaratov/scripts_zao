my @data1 = (1, 1, 1, 2, 3, 3, 3, 3, 5, 5, 6, 6, 6);
  
my %seen;
my @uniq = sort{$a cmp $b} grep {!$seen{$_}++} (@data1);
  
print @uniq;
