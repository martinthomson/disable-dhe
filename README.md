# disable-dhe extension

Disable DHE cipher suites in Firefox

This might be a good idea if you are concerned about the [logjam
attack](https://weakdh.org/).  This extension disables the affected cipher
suites.  That could mean that you will be unable to reach sites if they only
support the affected cipher suites.  The final fix - which will be in Firefox 39
- will be more selective, only affecting sites that offer weak DH shares.
